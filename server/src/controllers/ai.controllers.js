import { ChatSession, ChatMessage } from "../models/chat.models.js";
import AzureOpenAIService from "../utils/azureOpenAI.js";
import { v4 as uuidv4 } from "uuid";

// Initialize Azure OpenAI service with better error handling
let aiService = null;

const initializeAIService = () => {
    try {
        console.log("🔄 Attempting to initialize Azure OpenAI service...");

        // Check if all required environment variables are present
        const requiredEnvVars = [
            "AZURE_OPENAI_ENDPOINT",
            "AZURE_OPENAI_DEPLOYMENT_NAME",
        ];

        const missingVars = requiredEnvVars.filter(
            (varName) => !process.env[varName]
        );

        if (missingVars.length > 0) {
            console.error(
                "❌ Missing environment variables:",
                missingVars.join(", ")
            );
            return null;
        }

        aiService = new AzureOpenAIService();
        console.log("✅ Azure OpenAI service initialized successfully");
        return aiService;
    } catch (error) {
        console.error(
            "❌ Failed to initialize Azure OpenAI service:",
            error.message
        );
        aiService = null;
        return null;
    }
};

// Try to initialize on startup
initializeAIService();

// Health check endpoint
export const checkAIServiceHealth = async (req, res) => {
    try {
        console.log("🔍 Checking AI service health...");

        // If not configured, try to initialize again
        if (!aiService) {
            console.log(
                "🔄 AI service not available, attempting to reinitialize..."
            );
            const initialized = initializeAIService();

            if (!initialized) {
                return res.status(503).json({
                    success: false,
                    message: "AI service not configured",
                    configured: false,
                    timestamp: new Date().toISOString(),
                });
            }
        }

        // Test the connection
        console.log("🧪 Testing AI service connection...");
        const testResult = await aiService.testConnection();

        if (testResult.success) {
            res.json({
                success: true,
                message: "AI service is healthy and responding",
                configured: true,
                timestamp: new Date().toISOString(),
                testResponse: "Connection successful",
            });
        } else {
            res.status(503).json({
                success: false,
                message: "AI service health check failed",
                configured: true,
                error: testResult.error,
                code: testResult.code,
                timestamp: new Date().toISOString(),
            });
        }
    } catch (error) {
        console.error("❌ Health check error:", error);
        res.status(503).json({
            success: false,
            message: "Health check failed",
            configured: !!aiService,
            error: error.message,
            timestamp: new Date().toISOString(),
        });
    }
};

// Create new chat session
export const createChatSession = async (req, res) => {
    try {
        const sessionId = uuidv4();
        const userId = req.user?.id || null;

        const session = await ChatSession.createSession(sessionId, userId);

        res.json({
            success: true,
            data: {
                sessionId: session.sessionId,
                createdAt: session.createdAt,
            },
        });
    } catch (error) {
        console.error("Error creating chat session:", error);
        res.status(500).json({
            success: false,
            message: "Failed to create chat session",
            error: error.message,
        });
    }
};

// Send message and get AI response
export const sendMessage = async (req, res) => {
    try {
        console.log("📨 Received message request");

        // Check if AI service is available, if not try to initialize it
        if (!aiService) {
            console.log(
                "🔄 AI service not available, attempting to initialize..."
            );
            const initialized = initializeAIService();

            if (!initialized) {
                console.error("❌ Failed to initialize AI service");
                return res.status(503).json({
                    success: false,
                    message:
                        "AI service is not available. Please check configuration.",
                    details:
                        "Azure OpenAI credentials may not be properly configured.",
                });
            }
        }

        const { sessionId, message } = req.body;

        if (!sessionId || !message) {
            return res.status(400).json({
                success: false,
                message: "Session ID and message are required",
            });
        }

        console.log(`💬 Processing message for session: ${sessionId}`);

        // Save user message using the static method
        console.log("💾 Saving user message...");
        const userMessage = await ChatMessage.createMessage(
            sessionId,
            "user",
            message
        );
        console.log("✅ User message saved");

        console.log("🤖 Generating AI response...");

        // Get recent conversation history using the static method
        const recentMessages = await ChatMessage.getMessagesBySession(
            sessionId,
            10
        );
        const conversationHistory = recentMessages.slice(0, -1); // Exclude the current user message

        // Get AI response
        const aiResponse = await aiService.generateResponse(
            message,
            conversationHistory
        );

        if (aiResponse.success) {
            console.log("✅ AI response generated successfully");

            // Save AI response using the static method
            console.log("💾 Saving AI response...");
            const aiMessage = await ChatMessage.createMessage(
                sessionId,
                "assistant",
                aiResponse.message
            );
            console.log("✅ AI response saved");

            res.json({
                success: true,
                data: {
                    message: aiResponse.message,
                    messageId: aiMessage._id,
                    usage: aiResponse.usage,
                },
            });
        } else {
            console.error("❌ AI response failed:", aiResponse.error);
            res.status(500).json({
                success: false,
                message: aiResponse.error,
                code: aiResponse.code,
            });
        }
    } catch (error) {
        console.error("❌ Error in sendMessage:", error);

        // Provide more specific error messages
        let errorMessage = "Failed to process message";
        let statusCode = 500;

        if (error.message.includes("Azure OpenAI")) {
            errorMessage = "AI service configuration error";
            statusCode = 503;
        } else if (error.message.includes("authentication")) {
            errorMessage = "AI service authentication failed";
            statusCode = 503;
        } else if (
            error.message.includes("Chat session") &&
            error.message.includes("not found")
        ) {
            errorMessage = "Invalid chat session";
            statusCode = 404;
        }

        res.status(statusCode).json({
            success: false,
            message: errorMessage,
            error: error.message,
        });
    }
};

// Get chat history
export const getChatHistory = async (req, res) => {
    try {
        const { sessionId } = req.params;

        const messages = await ChatMessage.getMessagesBySession(sessionId);

        res.json({
            success: true,
            data: messages,
        });
    } catch (error) {
        console.error("Error getting chat history:", error);
        res.status(500).json({
            success: false,
            message: "Failed to get chat history",
            error: error.message,
        });
    }
};

// Get user chat sessions
export const getUserChatSessions = async (req, res) => {
    try {
        const userId = req.user?.id;

        if (!userId) {
            return res.status(400).json({
                success: false,
                message: "User ID is required",
            });
        }

        const sessions = await ChatSession.find({ userId })
            .sort({ createdAt: -1 })
            .limit(50);

        res.json({
            success: true,
            data: sessions,
        });
    } catch (error) {
        console.error("Error getting user chat sessions:", error);
        res.status(500).json({
            success: false,
            message: "Failed to get chat sessions",
            error: error.message,
        });
    }
};

// Delete chat session
export const deleteChatSession = async (req, res) => {
    try {
        const { sessionId } = req.params;
        const userId = req.user?.id;

        // Find and delete the session (ensure user owns it if authenticated)
        const query = { sessionId };
        if (userId) {
            query.userId = userId;
        }

        const session = await ChatSession.findOneAndDelete(query);

        if (!session) {
            return res.status(404).json({
                success: false,
                message: "Chat session not found or unauthorized",
            });
        }

        res.json({
            success: true,
            message: "Chat session deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting chat session:", error);
        res.status(500).json({
            success: false,
            message: "Failed to delete chat session",
            error: error.message,
        });
    }
};

// Stream chat response (for real-time typing effect)
export const streamMessage = async (req, res) => {
    try {
        const { sessionId, message } = req.body;

        if (!sessionId || !message) {
            return res.status(400).json({
                success: false,
                message: "Session ID and message are required",
            });
        }

        if (!aiService) {
            return res.status(503).json({
                success: false,
                message: "AI service is not available",
            });
        }

        // Set headers for streaming
        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Transfer-Encoding", "chunked");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");

        // Save user message
        await ChatMessage.createMessage(sessionId, "user", message);

        // Get conversation history
        const recentMessages = await ChatMessage.getMessagesBySession(
            sessionId,
            10
        );
        const conversationHistory = recentMessages.slice(0, -1);

        // Stream response
        const stream = await aiService.generateStreamingResponse(
            message,
            conversationHistory
        );
        let fullResponse = "";

        for await (const chunk of stream) {
            if (chunk.choices && chunk.choices[0]?.delta?.content) {
                const content = chunk.choices[0].delta.content;
                fullResponse += content;
                res.write(content);
            }
        }

        // Add complete response to messages
        if (fullResponse) {
            await ChatMessage.createMessage(
                sessionId,
                "assistant",
                fullResponse
            );
        }

        res.end();
    } catch (error) {
        console.error("Stream message error:", error);
        if (!res.headersSent) {
            res.status(500).json({
                success: false,
                message: "Failed to stream message",
            });
        } else {
            res.end();
        }
    }
};

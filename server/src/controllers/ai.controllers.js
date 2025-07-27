import { ChatSession, ChatMessage } from "../models/chat.models.js";
import AzureOpenAIService from "../utils/azureOpenAI.js";
import { v4 as uuidv4 } from "uuid";
import { log } from "../utils/logger.js";

let aiService = null;

const initializeAIService = () => {
    try {
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
                "Missing environment variables:",
                missingVars.join(", ")
            );
            return null;
        }

        aiService = new AzureOpenAIService();
        return aiService;
    } catch (error) {
        console.error(
            "Failed to initialize Azure OpenAI service:",
            error.message
        );
        aiService = null;
        return null;
    }
};

initializeAIService();

// Health check endpoint
export const checkAIServiceHealth = async (req, res) => {
    try {
        if (!aiService) {
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
        console.error("Health check error:", error);
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
        if (!aiService) {
            const initialized = initializeAIService();

            if (!initialized) {
                console.error("Failed to initialize AI service");
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

        log.info(`Processing message for session: ${sessionId}`);

        const userMessage = await ChatMessage.createMessage(
            sessionId,
            "user",
            message
        );

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
            const aiMessage = await ChatMessage.createMessage(
                sessionId,
                "assistant",
                aiResponse.message
            );

            res.json({
                success: true,
                data: {
                    message: aiResponse.message,
                    messageId: aiMessage._id,
                    usage: aiResponse.usage,
                },
            });
        } else {
            console.error("AI response failed:", aiResponse.error);
            res.status(500).json({
                success: false,
                message: aiResponse.error,
                code: aiResponse.code,
            });
        }
    } catch (error) {
        console.error("Error in sendMessage:", error);

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

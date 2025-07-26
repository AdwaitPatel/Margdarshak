import { AzureOpenAI } from "openai";
import {
    DefaultAzureCredential,
    getBearerTokenProvider,
} from "@azure/identity";
import dotenv from "dotenv";

dotenv.config();

export class AzureOpenAIService {
    constructor() {
        this.endpoint =
            process.env.AZURE_OPENAI_ENDPOINT ||
            "https://ai-adwaitpatelcs239999ai963817250029.openai.azure.com/";
        this.deploymentName =
            process.env.AZURE_OPENAI_DEPLOYMENT_NAME || "gpt-4";
        this.apiVersion =
            process.env.AZURE_OPENAI_API_VERSION || "2025-01-01-preview";

        if (!this.endpoint || !this.deploymentName) {
            const missing = [];
            if (!this.endpoint) missing.push("AZURE_OPENAI_ENDPOINT");
            if (!this.deploymentName)
                missing.push("AZURE_OPENAI_DEPLOYMENT_NAME");

            throw new Error(
                `Missing Azure OpenAI configuration: ${missing.join(", ")}. Please check your environment variables.`
            );
        }

        try {
            const credential = new DefaultAzureCredential();
            const scope = "https://cognitiveservices.azure.com/.default";
            const azureADTokenProvider = getBearerTokenProvider(
                credential,
                scope
            );

            // Initialize AzureOpenAI client with ONLY Azure AD authentication (no API key)
            this.client = new AzureOpenAI({
                endpoint: this.endpoint,
                azureADTokenProvider: azureADTokenProvider,
                apiVersion: this.apiVersion,
                deployment: this.deploymentName,
            });

            console.log(
                "Azure OpenAI client configured"
            );
        } catch (error) {
            console.error("Failed to configure Azure OpenAI client:", error);
            throw new Error(
                `Failed to configure Azure OpenAI client: ${error.message}`
            );
        }
    }

    static validateConfig() {
        const requiredVars = [
            "AZURE_OPENAI_ENDPOINT",
            "AZURE_OPENAI_DEPLOYMENT_NAME",
        ];

        const missing = requiredVars.filter((varName) => !process.env[varName]);

        if (missing.length > 0) {
            throw new Error(
                `Missing required environment variables: ${missing.join(", ")}`
            );
        }

        return true;
    }

    async generateResponse(message, conversationHistory = []) {
        try {
            console.log(
                "Generating AI response for message:",
                message.substring(0, 50) + "..."
            );

            const messages = [
                {
                    role: "system",
                    content: `You are Margdarshak, a warm and insightful virtual career mentor designed to guide students in choosing the right career paths. You provide personalized, practical, and motivating advice to help students identify their strengths, clarify their goals, and understand the options available to them. Speak in a friendly, supportive tone. Your answers should be clear, structured, and backed by real-world relevance. Encourage exploration and growth.

					You specialize in:
					- Explaining career paths (engineering, design, business, science, etc.)
					- Suggesting courses, degrees, and skills to pursue
					- Recommending tools, platforms, or certifications
					- Helping students discover their interests and match them to careers
					- Encouraging a positive, growth-oriented mindset

					Avoid giving generic or vague responses. Always aim to add value to the student's understanding and keep the answers as short as possible.`,
                },
                ...conversationHistory.map((msg) => ({
                    role: msg.role,
                    content: msg.content,
                })),
                {
                    role: "user",
                    content: message,
                },
            ];

            const result = await this.client.chat.completions.create({
                messages: messages,
                max_tokens: 800,
                temperature: 0.7,
                top_p: 0.95,
                frequency_penalty: 0,
                presence_penalty: 0,
                stop: null,
            });

            if (!result.choices || result.choices.length === 0) {
                throw new Error("No response generated from Azure OpenAI");
            }

            return {
                success: true,
                message: result.choices[0].message.content,
                usage: result.usage,
            };
        } catch (error) {
            console.error("Azure OpenAI API Error:", error);
            console.error("Error details:", {
                message: error.message,
                status: error.status,
                code: error.code,
                type: error.type,
            });

            // Provide more specific error messages
            if (error.status === 401) {
                return {
                    success: false,
                    error: "Azure OpenAI authentication failed. Check your Azure AD permissions.",
                    code: "AUTH_FAILED",
                };
            } else if (error.status === 404) {
                return {
                    success: false,
                    error: "Azure OpenAI deployment not found. Check your deployment name and endpoint.",
                    code: "DEPLOYMENT_NOT_FOUND",
                };
            } else if (error.status === 429) {
                return {
                    success: false,
                    error: "Azure OpenAI rate limit exceeded. Please try again later.",
                    code: "RATE_LIMITED",
                };
            } else if (error.code === "model_not_found") {
                return {
                    success: false,
                    error: `Model deployment '${this.deploymentName}' not found.`,
                    code: "MODEL_NOT_FOUND",
                };
            } else if (error.code === "insufficient_quota") {
                return {
                    success: false,
                    error: "Azure OpenAI quota exceeded. Check your subscription.",
                    code: "QUOTA_EXCEEDED",
                };
            }

            return {
                success: false,
                error: `Azure OpenAI API error: ${error.message}`,
                code: "API_ERROR",
            };
        }
    }

    async generateStreamingResponse(message, conversationHistory = []) {
        try {
            const messages = [
                {
                    role: "system",
                    content:
                        "You are Margdarshak, a helpful career guidance assistant. Keep responses concise and actionable.",
                },
                ...conversationHistory.map((msg) => ({
                    role: msg.role,
                    content: msg.content,
                })),
                {
                    role: "user",
                    content: message,
                },
            ];

            const stream = await this.client.chat.completions.create({
                messages: messages,
                max_tokens: 800,
                temperature: 0.7,
                top_p: 0.95,
                stream: true,
            });

            return stream;
        } catch (error) {
            console.error("Azure OpenAI Stream Error:", error);
            throw new Error(`Azure OpenAI streaming error: ${error.message}`);
        }
    }

    // Test method for health check
    async testConnection() {
        try {
            const testResponse = await this.generateResponse(
                "Hello, are you working?"
            );
            return testResponse;
        } catch (error) {
            return {
                success: false,
                error: error.message,
                code: "CONNECTION_TEST_FAILED",
            };
        }
    }
}

export default AzureOpenAIService;

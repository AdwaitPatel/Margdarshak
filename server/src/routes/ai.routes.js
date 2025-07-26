import { Router } from "express";
import {
    createChatSession,
    sendMessage,
    getChatHistory,
    getUserChatSessions,
    deleteChatSession,
    streamMessage,
    checkAIServiceHealth,
} from "../controllers/ai.controllers.js";

const aiRouter = Router();

// Public routes (no authentication required)
aiRouter.post("/chat/session", createChatSession);
aiRouter.post("/chat/message", sendMessage);
aiRouter.get("/chat/session/:sessionId", getChatHistory);
aiRouter.post("/chat/stream", streamMessage);
aiRouter.get("/health", checkAIServiceHealth);

// Protected routes (authentication required) - Temporarily commented out until we fix auth middleware
// aiRouter.get("/chat/sessions", verifyToken, getUserChatSessions);
// aiRouter.delete("/chat/session/:sessionId", verifyToken, deleteChatSession);

// For now, make these public routes until auth middleware is fixed
aiRouter.get("/chat/sessions", getUserChatSessions);
aiRouter.delete("/chat/session/:sessionId", deleteChatSession);

export { aiRouter };

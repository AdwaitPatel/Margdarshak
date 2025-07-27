import { Router } from "express";
import {
    createChatSession,
    sendMessage,
    checkAIServiceHealth,
} from "../controllers/ai.controllers.js";

const aiRouter = Router();

aiRouter.post("/chat/session", createChatSession);
aiRouter.post("/chat/message", sendMessage);
aiRouter.get("/health", checkAIServiceHealth);

export { aiRouter };

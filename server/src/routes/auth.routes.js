import { Router } from "express";
import { loginUser, registerUser } from "../controllers/auth.controllers.js";

const authRouter = Router();

authRouter.post("/signup", registerUser);
authRouter.post("/login", loginUser);

export { authRouter };

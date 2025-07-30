import { Router } from "express";
import passport from "passport";
import {
    loginUser,
    registerUser,
    googleCallback,
    logoutUser,
    refreshAccessToken,
} from "../controllers/auth.controllers.js";
import verifyToken from "../middlewares/auth.middlewares.js";

const authRouter = Router();

// Traditional authentication routes
authRouter.post("/signup", registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/logout", verifyToken, logoutUser);
authRouter.post("/refresh-token", refreshAccessToken);

// Google OAuth routes
authRouter.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"],
    })
);

authRouter.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: "/login?error=google_auth_failed",
    }),
    googleCallback
);

export { authRouter };

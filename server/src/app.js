import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "./config/passport.js";

dotenv.config();

const app = express();

// set who can use our server
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

// Session configuration for passport
app.use(
    session({
        secret: process.env.SESSION_SECRET || "session-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: process.env.NODE_ENV === "production",
            maxAge: 24 * 60 * 60 * 1000, // 24 hours
        },
    })
);

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Middleware to parse JSON
app.use(
    express.json({
        limit: "16kb",
    })
);

// for processing form-like data
app.use(
    express.urlencoded({
        extended: true,
        limit: "16kb",
    })
);

// save static files in public
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import { userRouter } from "./routes/user.routes.js";
import { authRouter } from "./routes/auth.routes.js";
import { aiRouter } from "./routes/ai.routes.js";

// routes declaration
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/ai", aiRouter);

export default app;

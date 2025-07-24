import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// set who can use our server
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

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
import { studentRouter } from "./routes/student.routes.js";

// routes declaration
app.use("/api/v1/student", studentRouter);
// http://localhost:8000/api/v1

export default app;

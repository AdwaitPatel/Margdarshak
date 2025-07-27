import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";
import { log } from "./utils/logger.js";

dotenv.config({
    path: "./.env",
});

const PORT = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            log.success(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        log.error(`MongoDB connection failed, ${err}`);
    });

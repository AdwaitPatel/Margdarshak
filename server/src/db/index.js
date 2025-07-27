import mongoose from "mongoose";
import { log } from "../utils/logger.js";

// async functions always returns a promise
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
        );

        log.success(
            `MongoDB connected!! DB HOST : ${connectionInstance.connection.host} Cluster : ${connectionInstance.connection.name}`
        );
    } catch (error) {
        log.error("MongoDB connection error", error);
        process.exit(1);
    }
};

export default connectDB;

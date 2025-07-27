import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const getMentorProfile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = decoded.id;

        const mentor = await User.findById(userId).select(
            "-password -refreshToken"
        );

        if (!mentor) {
            return res.status(404).json({ message: "Mentor not found" });
        }

        res.status(200).json({
            success: true,
            data: mentor,
        });
    } catch (error) {
        console.error("Error fetching mentor profile:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export { getMentorProfile };

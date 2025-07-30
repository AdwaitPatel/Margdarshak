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

const updateMentorProfile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token provided",
            });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        const userId = decoded.id;

        // Get the current user to verify they are a mentor
        const currentUser = await User.findById(userId);
        if (!currentUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if (currentUser.role !== "mentor") {
            return res.status(403).json({
                success: false,
                message:
                    "Access denied. Only mentors can update mentor profiles.",
            });
        }

        // Extract fields that mentors can update
        const {
            fullName,
            email,
            phone,
            specialization,
            experience,
            bio,
            profilePicture,
            isFreeSession,
            sessionPrice,
        } = req.body;

        // Validate required fields
        if (!fullName || !email) {
            return res.status(400).json({
                success: false,
                message: "Full name and email are required fields",
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format",
            });
        }

        // Validate phone number if provided
        if (phone && (typeof phone !== "number" || phone < 0)) {
            return res.status(400).json({
                success: false,
                message: "Phone number must be a valid number",
            });
        }

        // Validate experience if provided
        if (experience && (typeof experience !== "number" || experience < 0)) {
            return res.status(400).json({
                success: false,
                message: "Experience must be a valid positive number",
            });
        }

        // Check if email is already taken by another user
        if (email !== currentUser.email) {
            const existingUser = await User.findOne({
                email: email,
                _id: { $ne: userId },
            });
            if (existingUser) {
                return res.status(409).json({
                    success: false,
                    message: "Email is already registered with another account",
                });
            }
        }

        // Prepare update object with only provided fields
        const updateFields = {};
        if (fullName !== undefined) updateFields.fullName = fullName.trim();
        if (email !== undefined)
            updateFields.email = email.toLowerCase().trim();
        if (phone !== undefined) updateFields.phone = phone;
        if (specialization !== undefined)
            updateFields.specialization = specialization.trim();
        if (experience !== undefined) updateFields.experience = experience;
        if (bio !== undefined) updateFields.bio = bio.trim();
        if (profilePicture !== undefined)
            updateFields.profilePicture = profilePicture;
        if (isFreeSession !== undefined)
            updateFields.isFreeSession = isFreeSession;
        if (sessionPrice !== undefined)
            updateFields.sessionPrice = sessionPrice;

        // Update the mentor profile
        const updatedMentor = await User.findByIdAndUpdate(
            userId,
            updateFields,
            {
                new: true,
                runValidators: true,
            }
        ).select("-password -refreshToken");

        if (!updatedMentor) {
            return res.status(404).json({
                success: false,
                message: "Mentor not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: updatedMentor,
        });
    } catch (error) {
        console.error("Error updating mentor profile:", error);

        // Handle validation errors
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(
                (err) => err.message
            );
            return res.status(400).json({
                success: false,
                message: "Validation error",
                errors: validationErrors,
            });
        }

        // Handle JWT errors
        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                success: false,
                message: "Invalid token",
            });
        }

        res.status(500).json({
            success: false,
            message: "Server error while updating profile",
            error: error.message,
        });
    }
};

export { getMentorProfile, updateMentorProfile };

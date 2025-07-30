import { MeetingForm } from "../models/meetingForm.models.js";
import { User } from "../models/user.models.js";
import jwt from "jsonwebtoken";
import { log } from "../utils/logger.js";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const saveMeetingForm = async (req, res) => {
    try {
        const {
            studentId,
            mentorId,
            name,
            email,
            phone,
            date,
            time,
            languageSpoken,
            schoolBoard,
            message,
        } = req.body;

        if (
            [
                studentId,
                mentorId,
                name,
                email,
                phone,
                date,
                time,
                languageSpoken,
                schoolBoard,
                message,
            ].some((field) => {
                field === "";
            })
        ) {
            return res.status(400).json({
                message: "All fields are required.",
            });
        }

        // user can't schedule two meetings in a day with same mentor
        const existingMeeting = await MeetingForm.findOne({
            email,
            mentorId,
            date,
        });

        if (existingMeeting) {
            return res.status(409).json({
                success: false,
                message:
                    "You already have a meeting booked with this mentor on this date.",
            });
        }

        const newMeetingForm = await MeetingForm.create({
            studentId,
            mentorId,
            name,
            email,
            phone,
            date,
            time,
            languageSpoken,
            schoolBoard,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Meeting booked successfully",
            data: newMeetingForm,
        });
    } catch (error) {
        log.error(`Error saving meeting: ${error}`);
        res.status(500).json({
            success: false,
            message: "Failed to book meeting",
            error: error.message,
        });
    }
};

// test these two
const getAllMeetings = async (req, res) => {
    try {
        // todo => get student id from headers token
        const meetingForms = await MeetingForm.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: meetingForms.length,
            data: meetingForms,
        });
    } catch (error) {
        console.error("Error fetching meetings:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch meetings",
            error: error.message,
        });
    }
};

const getMeetingById = async (req, res) => {
    try {
        const { id } = req.params;
        const meetingForm = await MeetingForm.findById(id);

        if (!meetingForm) {
            return res.status(404).json({
                success: false,
                message: "Meeting not found",
            });
        }

        res.status(200).json({
            success: true,
            data: meetingForm,
        });
    } catch (error) {
        console.error("Error fetching meeting:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch meeting",
            error: error.message,
        });
    }
};

const getStudentProfile = async (req, res) => {
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

        const student = await User.findById(userId).select(
            "-password -refreshToken"
        );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            data: student,
        });
    } catch (error) {
        console.error("Error fetching student profile:", error);

        if (error.name === "JsonWebTokenError") {
            return res.status(401).json({
                success: false,
                message: "Invalid token",
            });
        }

        res.status(500).json({
            success: false,
            message: "Server error",
        });
    }
};

const updateStudentProfile = async (req, res) => {
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

        // Get the current user to verify they are a student
        const currentUser = await User.findById(userId);
        if (!currentUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if (currentUser.role !== "student") {
            return res.status(403).json({
                success: false,
                message:
                    "Access denied. Only students can update student profiles.",
            });
        }

        // Extract fields that students can update
        const { fullName, email, phone, profilePicture } = req.body;

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
        if (profilePicture !== undefined)
            updateFields.profilePicture = profilePicture;

        // Update the student profile
        const updatedStudent = await User.findByIdAndUpdate(
            userId,
            updateFields,
            {
                new: true,
                runValidators: true,
            }
        ).select("-password -refreshToken");

        if (!updatedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: updatedStudent,
        });
    } catch (error) {
        console.error("Error updating student profile:", error);

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

export {
    saveMeetingForm,
    getAllMeetings,
    getMeetingById,
    getStudentProfile,
    updateStudentProfile,
};

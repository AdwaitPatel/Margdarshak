import { User } from "../models/user.models.js";
import { log } from "../utils/logger.js";

const addMentor = async (req, res, next) => {
    try {
        const { fullName, email, password, phone, specialization } = req.body;

        const existedUser = await User.findOne({ email });

        if (existedUser) {
            return res.status(409).json({
                success: false,
                message: "User with this email already exists",
            });
        }

        const mentor = await User.create({
            fullName,
            email,
            password,
            phone,
            specialization,
            role: "mentor",
        });

        const createdMentor = await User.findById(mentor._id).select(
            "-password -refreshToken"
        );

        res.status(201).json({
            success: true,
            message: "New mentor added successfully.",
            data: createdMentor,
        });
    } catch (err) {
        log.error(`Error : ${err}`);
        return res.status(500).json({
            success: false,
            error: "Something went wrong while adding a new mentor.",
        });
    }
};

const getAllMentors = async (req, res) => {
    try {
        const mentors = await User.find({ role: "mentor" });

        res.status(200).json({
            success: true,
            message: "All mentors data fetched successfully.",
            data: mentors,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Something went wrong while fetching mentors.",
        });
    }
};

const getAllStudents = async (req, res) => {
    try {
        const students = await User.find({ role: "student" });

        res.status(200).json({
            success: true,
            message: "All students data fetched successfully.",
            data: students,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Something went wrong while fetching students.",
        });
    }
};

const deleteMentor = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedMentor = await User.findByIdAndDelete(id);

        if (!deletedMentor) {
            return res.status(404).json({
                success: false,
                error: "Mentor not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Mentor deleted successfully.",
            data: deletedMentor,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Something went wrong while deleting mentor.",
        });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedStudent = await User.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({
                success: false,
                error: "Student not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Student deleted successfully.",
            data: deletedStudent,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Something went wrong while deleting student.",
        });
    }
};

const getStats = async (req, res) => {
    try {
        const mentorsCount = await User.countDocuments({ role: "mentor" });
        const studentsCount = await User.countDocuments({ role: "student" });

        res.status(200).json({
            success: true,
            message: "Stats fetched successfully.",
            data: {
                totalMentors: mentorsCount,
                totalStudents: studentsCount,
                activeSessions: 12, // This can be updated later when you have sessions model
            },
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Something went wrong while fetching stats.",
        });
    }
};

export {
    addMentor,
    getAllMentors,
    getAllStudents,
    deleteMentor,
    deleteStudent,
    getStats,
};

import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";

const registerUser = async (req, res) => {
    try {
        const {
            email,
            password,
            confirmPassword,
            role,
            fullName,
            phone,
            specialization,
            experience,
            bio,
            isFreeSession,
        } = req.body;

        if (role) {
            if (
                !(role === "student" || role === "admin" || role === "mentor")
            ) {
                return res.status(400).json({
                    message: "Role is invalid",
                });
            }
        }

        if (
            [email, password, confirmPassword].some(
                (field) => field?.trim() === ""
            )
        ) {
            return res.status(400).json({
                message: "All fields are required.",
            });
        }

        const existedUser = await User.findOne({ email });

        if (existedUser) {
            return res
                .status(409)
                .json({ message: "User with this email already exists" });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match" });
        }

        const user = await User.create({
            email,
            password,
            role,
            fullName,
            phone,
            specialization,
            experience,
            bio,
            isFreeSession,
        });

        const createdUser = await User.findById(user._id).select(
            "-password -refreshToken"
        );

        if (!createdUser) {
            return res.status(500).json({
                message: "Something went wrong while registering.",
            });
        }

        return res.status(201).json({
            success: true,
            message: "User has registered successfully.",
            data: createdUser,
        });
    } catch (error) {
        console.error("Register Error:", error);
        return res.status(500).json({
            message: "Something went wrong while registering the user.",
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const existedUser = await User.findOne({ email });

        if (!existedUser) {
            return res.status(404).json({
                message: `User with email ${email} not found`,
            });
        }

        const isPasswordValid = await existedUser.isPasswordCorrect(password);

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Invalid credentials",
            });
        }

        const token = jwt.sign(
            { id: existedUser._id, role: existedUser.role },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRY }
        );

        res.status(200).json({
            success: true,
            message: "User logged in succesfully",
            token,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong while login.",
        });
    }
};

export { registerUser, loginUser };

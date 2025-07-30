import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";
import bcrypt from "bcrypt";

const generateTokens = (user) => {
    const accessToken = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRY }
    );

    const refreshToken = jwt.sign(
        { id: user._id },
        process.env.REFRESH_TOKEN_SECRET || process.env.JWT_SECRET,
        { expiresIn: "7d" }
    );

    return { accessToken, refreshToken };
};

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

        const { accessToken, refreshToken } = generateTokens(existedUser);

        // Update refresh token in database
        existedUser.refreshToken = refreshToken;
        await existedUser.save();

        res.status(200).json({
            success: true,
            message: "User logged in successfully",
            token: accessToken,
            refreshToken,
            user: {
                id: existedUser._id,
                fullName: existedUser.fullName,
                email: existedUser.email,
                role: existedUser.role,
                profilePicture: existedUser.profilePicture,
            },
        });
    } catch (error) {
        return res.status(500).json({
            message: "Something went wrong while login.",
        });
    }
};

const googleCallback = async (req, res) => {
    try {
        // req.user is available from passport authentication
        if (!req.user) {
            return res.redirect(
                `${process.env.CLIENT_URL || "http://localhost:5173"}/login?error=authentication_failed`
            );
        }

        const { accessToken, refreshToken } = generateTokens(req.user);

        // Update refresh token in database
        req.user.refreshToken = refreshToken;
        await req.user.save();

        // Redirect to frontend with token
        const redirectUrl = `${process.env.CLIENT_URL || "http://localhost:5173"}/auth/success?token=${accessToken}&refreshToken=${refreshToken}&user=${encodeURIComponent(
            JSON.stringify({
                id: req.user._id,
                fullName: req.user.fullName,
                email: req.user.email,
                role: req.user.role,
                profilePicture: req.user.profilePicture,
            })
        )}`;

        res.redirect(redirectUrl);
    } catch (error) {
        console.error("Google callback error:", error);
        res.redirect(
            `${process.env.CLIENT_URL || "http://localhost:5173"}/login?error=callback_error`
        );
    }
};

const logoutUser = async (req, res) => {
    try {
        const userId = req.user?.id;

        if (userId) {
            // Clear refresh token from database
            await User.findByIdAndUpdate(userId, {
                $unset: { refreshToken: 1 },
            });
        }

        res.status(200).json({
            success: true,
            message: "User logged out successfully",
        });
    } catch (error) {
        console.error("Logout error:", error);
        res.status(500).json({
            message: "Something went wrong while logging out.",
        });
    }
};

const refreshAccessToken = async (req, res) => {
    try {
        const { refreshToken } = req.body;

        if (!refreshToken) {
            return res.status(401).json({
                message: "Refresh token is required",
            });
        }

        const decoded = jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET || process.env.JWT_SECRET
        );
        const user = await User.findById(decoded.id);

        if (!user || user.refreshToken !== refreshToken) {
            return res.status(401).json({
                message: "Invalid refresh token",
            });
        }

        const { accessToken, refreshToken: newRefreshToken } =
            generateTokens(user);

        // Update refresh token in database
        user.refreshToken = newRefreshToken;
        await user.save();

        res.status(200).json({
            success: true,
            accessToken,
            refreshToken: newRefreshToken,
        });
    } catch (error) {
        console.error("Refresh token error:", error);
        res.status(401).json({
            message: "Invalid refresh token",
        });
    }
};

export {
    registerUser,
    loginUser,
    googleCallback,
    logoutUser,
    refreshAccessToken,
};

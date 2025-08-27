import dotenv from "dotenv";
dotenv.config();

import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import { User } from "../models/user.models.js";

// Google OAuth Strategy
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL:
                "https://margdarshak-kt73.onrender.com/api/v1/auth/google/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Check if user already exists with this Google ID
                let existingUser = await User.findOne({ googleId: profile.id });

                if (existingUser) {
                    // User exists, return the user
                    return done(null, existingUser);
                }

                // Check if user exists with the same email
                existingUser = await User.findOne({
                    email: profile.emails[0].value,
                });

                if (existingUser) {
                    // User exists with email but no Google ID, link the accounts
                    existingUser.googleId = profile.id;
                    existingUser.profilePicture =
                        profile.photos[0]?.value || existingUser.profilePicture;
                    await existingUser.save();
                    return done(null, existingUser);
                }

                // Create new user
                const newUser = await User.create({
                    googleId: profile.id,
                    fullName: profile.displayName,
                    email: profile.emails[0].value,
                    profilePicture:
                        profile.photos[0]?.value ||
                        "https://cdn-icons-png.freepik.com/512/3135/3135755.png?ga=GA1.1.424641006.1750279238",
                    password: Math.random().toString(36).slice(-8), // Generate random password for Google users
                    role: "student", // Default role
                });

                return done(null, newUser);
            } catch (error) {
                console.error("Google OAuth Error:", error);
                return done(error, null);
            }
        }
    )
);

// Serialize user for session
passport.serializeUser((user, done) => {
    done(null, user._id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id).select("-password -refreshToken");
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

export default passport;

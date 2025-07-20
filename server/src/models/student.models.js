/*
student {
  fullName string
  email string
  password string
  profilePicture string
  phone number
  googleId string
  refreshToken string

  createdAt Date
  updatedAt Date
}
*/

import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            default: "Student",
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
        },
        profilePicture: {
            type: String,
            default:
                "https://cdn-icons-png.freepik.com/512/3135/3135755.png?ga=GA1.1.424641006.1750279238",
        },
        phone: {
            type: Number,
            unique: true,
        },
        googleId: {
            type: String,
            unique: true,
        },
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const Student = mongoose.model("Student", studentSchema);

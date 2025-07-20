/*
mentor {
  fullName string
  email string
  password string
  profilePicture string
  specialization string            // e.g. "Computer Science"
  experience number               // e.g. 15 (years)
  bio string 
  phone number
  googleId string
  refreshToken string

  createdAt Date
  updatedAt Date
}
*/

import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            default: "Mentor",
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
                "https://i.pinimg.com/736x/d1/7a/42/d17a4280ffd64c0c347bee97a8f2c91e.jpg",
        },
		specialization: {
			type: String,
		},
		experience: {
			type: Number,
		},
		bio: {
			type: String,
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

export const Mentor = mongoose.model("Mentor", mentorSchema);

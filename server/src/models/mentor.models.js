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
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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

mentorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

mentorSchema.methods.isPasswordCorrect = async function (password) {
    return bcrypt.compare(password, this.password);
};

// ACCESS TOKEN
mentorSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            // payloads
            _id: this._id,
            email: this.email,
            fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};
// REFRESH TOKEN
mentorSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            // payloads
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
};

mentorSchema.plugin(mongooseAggregatePaginate);

export const Mentor = mongoose.model("Mentor", mentorSchema);

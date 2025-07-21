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

import mongoose, { Aggregate } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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

// preHook is used before saving the info in DB
// encrypt the password before saving in DB
studentSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

studentSchema.methods.isPasswordCorrect = async function (password) {
    return bcrypt.compare(password, this.password);
};

// ACCESS TOKEN
studentSchema.methods.generateAccessToken = function () {
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
studentSchema.methods.generateRefreshToken = function () {
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

studentSchema.plugin(mongooseAggregatePaginate);

export const Student = mongoose.model("Student", studentSchema);

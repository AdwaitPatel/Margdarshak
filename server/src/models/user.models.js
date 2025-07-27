import mongoose, { Aggregate } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        // common fields for mentor and student
        fullName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
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
            trim: true,
        },
        googleId: {
            type: String,
        },
        refreshToken: {
            type: String,
        },

        role: {
            type: String,
            enum: ["admin", "mentor", "student"],
            default: "student",
        },

        // mentor fields
        specialization: {
            type: String,
        },
        experience: {
            type: Number,
        },
        bio: {
            type: String,
        },
        isFreeSession: {
            type: Boolean,
        },
        sessionPrice: {
            type: Number,
        },
    },
    {
        timestamps: true,
    }
);

// preHook is used before saving the info in DB
// encrypt the password before saving in DB
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    return bcrypt.compare(password, this.password);
};

// ACCESS TOKEN
userSchema.methods.generateAccessToken = function () {
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
userSchema.methods.generateRefreshToken = function () {
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

userSchema.plugin(mongooseAggregatePaginate);

export const User = mongoose.model("User", userSchema);

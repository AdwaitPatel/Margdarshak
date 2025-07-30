import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
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
            required: function () {
                // Password is required only if user doesn't have googleId
                return !this.googleId;
            },
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
    // Skip password hashing if password is not modified or if user has googleId
    if (!this.isModified("password") || this.googleId) return next();

    this.password = await bcrypt.hash(this.password, 10);
    next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
    // If user signed up with Google, they don't have a traditional password
    if (this.googleId && !this.password) {
        return false;
    }
    return bcrypt.compare(password, this.password);
};

userSchema.plugin(mongooseAggregatePaginate);

export const User = mongoose.model("User", userSchema);

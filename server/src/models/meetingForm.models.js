import mongoose from "mongoose";

const meetingFormSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        mentorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mentor",
            required: true,
        },
        name: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            required: true,
        },
        phone: {
            type: Number,
            trim: true,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
        time: {
            type: String,
            required: true,
        },
        languageSpoken: {
            type: [String],
            required: true,
        },
        schoolBoard: {
            type: String,
            enum: [
                // National boards
                "CBSE",
                "ICSE",
                "CISCE",
                "NIOS",

                // International boards (optional)
                "IB",
                "IGCSE",

                // State boards
                "MSBSHSE", // Maharashtra
                "UPMSP", // Uttar Pradesh
                "RBSE", // Rajasthan
                "BSEAP", // Andhra Pradesh
                "KSEEB", // Karnataka
                "WBCHSE", // West Bengal
                "TN", // Tamil Nadu
                "PSEB", // Punjab
                "HBSE", // Haryana
                "GSEB", // Gujarat
                "BSEB", // Bihar
                "CHSE", // Odisha
                "JAC", // Jharkhand
                "MBOSE", // Meghalaya
                "NBSE", // Nagaland
                "CGBSE", // Chhattisgarh
                "BOSE", // Jammu & Kashmir
                "TBSE", // Tripura
                "MPSOS", // MP State Open School
                "RSOS", // Rajasthan State Open School
                "Other", // fallback option
            ],
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export const MeetingForm = mongoose.model("MeetingForm", meetingFormSchema);

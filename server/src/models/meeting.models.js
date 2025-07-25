import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
        },
        mentorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mentor",
        },
        zoomMeetingId: {
            type: String,
            unique: true,
            required: true,
        },
        zoomJoinUrl: {
            type: String,
            required: true,
        },
        zoomStartUrl: {
            type: String,
            required: true,
        },
        scheduledAt: {
            type: Date,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
            default: 60,
        },
        status: {
            type: String,
            enum: ["scheduled", "started", "ended", "cancelled"],
            default: "scheduled",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Meeting = mongoose.model("Meeting", meetingSchema);

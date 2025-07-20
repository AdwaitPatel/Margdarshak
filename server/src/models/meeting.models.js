/*
meeting {
  studentId string fk
  mentorId string fk
  zoomMeetingId string        // Zoom's meeting ID
  zoomJoinUrl string               // join link for participant
  zoomStartUrl string              // start link for host (mentor)
  scheduledAt DateTime             // scheduled date & time
  duration number                  // in minutes
  status enum("scheduled", "started", "ended", "cancelled")

  createdAt DateTime
  updatedAt DateTime
}
*/

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

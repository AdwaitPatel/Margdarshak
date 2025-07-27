// meetingForm[icon: form, color: purple] {
//   name string fk                           *
//   email string fk                          *
//   phone number fk                          *
//   date date                                *
//   time time                                *
//   languageSpoken string                    *
//   schoolBoard string                       *
//   message string                           *
//   studentId string fk                      *
//   mentorId string fk                       *
//   createdAt DateTime
//   updatedAt DateTime
// }


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
            unique: true,
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
            type: String,
            required: true,
        },
        schoolBoard: {
            type: String,
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
import { User } from "../models/user.models.js";
import { Meeting } from "../models/meeting.models.js";

// arbab ka task dashbord hai

// mahak ka task => make api for meeting form here

import { MeetingForm } from "../models/meetingForm.models.js";
import { log } from "../utils/logger.js";

// Meeting form data save karne ka function
const saveMeetingForm = async (req, res) => {
    try {
        const {
            studentId,
            mentorId,
            name,
            email,
            phone,
            date,
            time,
            languageSpoken,
            schoolBoard,
            message,
        } = req.body;

        if (
            [
                studentId,
                mentorId,
                name,
                email,
                phone,
                date,
                time,
                languageSpoken,
                schoolBoard,
                message,
            ].some((field) => {
                field === "";
            })
        ) {
            return res.status(400).json({
                message: "All fields are required.",
            });
        }

        const existingMeeting = await MeetingForm.findOne({
            email,
            mentorId,
            date,
        });

        if (existingMeeting) {
            return res.status(409).json({
                success: false,
                message:
                    "You already have a meeting booked with this mentor on this date.",
            });
        }

        const newMeetingForm = await MeetingForm.create({
            studentId,
            mentorId,
            name,
            email,
            phone,
            date,
            time,
            languageSpoken,
            schoolBoard,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Meeting booked successfully",
            data: newMeetingForm,
        });
    } catch (error) {
        log.error(`Error saving meeting: ${error}`);

        // Error response
        res.status(500).json({
            success: false,
            message: "Failed to book meeting",
            error: error.message,
        });
    }
};

// Saari meetings get karne ka function *
const getAllMeetings = async (req, res) => {
    try {
        const meetingForms = await MeetingForm.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: meetingForms.length,
            data: meetingFormForms,
        });
    } catch (error) {
        console.error("Error fetching meetings:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch meetings",
            error: error.message,
        });
    }
};

// Specific meeting get karne ka function *
const getMeetingById = async (req, res) => {
    try {
        const { id } = req.params;
        const meetingForm = await MeetingForm.findById(id);

        if (!meetingForm) {
            return res.status(404).json({
                success: false,
                message: "Meeting not found",
            });
        }

        res.status(200).json({
            success: true,
            data: meeting,
        });
    } catch (error) {
        console.error("Error fetching meeting:", error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch meeting",
            error: error.message,
        });
    }
};

export { saveMeetingForm, getAllMeetings, getMeetingById };

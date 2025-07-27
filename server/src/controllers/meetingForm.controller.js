import { MeetingForm } from "../models/meetingForm.model.js";

// Meeting form data save karne ka function
const saveMeetingForm = async (req, res) => {
    try {
        // Body se saara data extract kra hai
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

        if([studentId, mentorId, name, email, phone, date, time, languageSpoken, schoolBoard, message].some((field) => {
            field === ""
        })){
            return res.status(400).json({
                message: "All fields are required.",
            });
        }
        // Creating Naya meeting form object
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
            message
        });

        console.log(newMeetingForm);
        // Success response
        res.status(201).json({
            success: true,
            message: "Meeting successfully saved!",
            data: newMeetingForm,
        });
    } catch (error) {
        console.error("Error saving meeting:", error);

        // Error response
        res.status(500).json({
            success: false,
            message: "Failed to save meeting",
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

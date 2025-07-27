// send this route to student.controller

import { Router } from "express";
import {
    saveMeetingForm,
    getAllMeetings,
    getMeetingById,
} from "../controllers/meetingForm.controller.js";

const studentRouter = Router();

studentRouter.post("/meetingForm", saveMeetingForm);
studentRouter.post("/getAllMeetings", getAllMeetings);
studentRouter.post("/getMeetingByID", getMeetingById);

export { studentRouter };

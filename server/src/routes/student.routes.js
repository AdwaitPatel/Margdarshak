import { Router } from "express";
import {
    saveMeetingForm,
    getAllMeetings,
    getMeetingById,
} from "../controllers/student.controllers.js";

const studentRouter = Router();

studentRouter.post("/meetingForm", saveMeetingForm);
studentRouter.get("/getAllMeetings", getAllMeetings);
studentRouter.get("/getMeetingByID/:id", getMeetingById);

export { studentRouter };

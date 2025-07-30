import { Router } from "express";
import {
    saveMeetingForm,
    getAllMeetings,
    getMeetingById,
    getStudentProfile,
    updateStudentProfile,
} from "../controllers/student.controllers.js";

const studentRouter = Router();

studentRouter.post("/meetingForm", saveMeetingForm);
studentRouter.get("/getAllMeetings", getAllMeetings);
studentRouter.get("/getMeetingByID/:id", getMeetingById);
studentRouter.get("/profile", getStudentProfile);
studentRouter.put("/profile", updateStudentProfile);
studentRouter.patch("/profile", updateStudentProfile);

export { studentRouter };

import { Router } from "express";
import {
    getMentorProfile,
    updateMentorProfile,
} from "../controllers/mentor.controllers.js";

const mentorRouter = Router();

mentorRouter.get("/profile", getMentorProfile);
mentorRouter.put("/profile", updateMentorProfile);
mentorRouter.patch("/profile", updateMentorProfile);

export { mentorRouter };

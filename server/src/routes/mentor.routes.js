// added by rakhi
import { Router } from "express";
import { getMentorProfile } from "../controllers/mentor.controllers.js";

const mentorRouter = Router();
mentorRouter.get("/profile", getMentorProfile);

export { mentorRouter }


import { Router } from "express";
import {
    addMentor,
    getMentors
} from "../controllers/addmentor.controllers.js";
const addMentorRouter = Router()
// Add a new mentor
addMentorRouter.post('/', addMentor);

// Get all mentors
addMentorRouter.get('/', getMentors);

export { addMentorRouter };
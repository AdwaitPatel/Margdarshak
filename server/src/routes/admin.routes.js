import { Router } from "express";
import {
    addMentor,
    getAllMentors,
    getAllStudents,
    deleteMentor,
    deleteStudent,
    getStats,
} from "../controllers/admin.controllers.js";

const adminRouter = Router();

adminRouter.post("/addMentor", addMentor);
adminRouter.get("/getAllMentors", getAllMentors);
adminRouter.get("/getAllStudents", getAllStudents);
adminRouter.get("/getStats", getStats);
adminRouter.delete("/deleteMentor/:id", deleteMentor);
adminRouter.delete("/deleteStudent/:id", deleteStudent);

export { adminRouter };

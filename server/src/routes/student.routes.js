import { Router } from "express";
import { registerStudent } from "../controllers/student.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const studentRouter = Router();

// Todo : use this for 1:1 form
// studentRouter.route("/signup").post(
// 	upload.single("profilePicture"),
// 	registerStudent
// );

studentRouter.route("/signup").post(registerStudent);

export { studentRouter };

import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import verifyToken from "../middlewares/auth.middlewares.js";
import authorizeRoles from "../middlewares/role.middlewares.js";

const userRouter = Router();

// Todo : use this for 1:1 form
// studentRouter.route("/signup").post(
// 	upload.single("profilePicture"),
// 	registerStudent
// );

// only admin can access
userRouter
    .route("/admin")
    .get(verifyToken, authorizeRoles("admin"), (req, res) => {
        res.json({
            message: "Welcome admin",
        });
    });

// only admin and mentor can access
userRouter
    .route("/mentor")
    .get(verifyToken, authorizeRoles("admin", "mentor"), (req, res) => {
        res.json({
            message: "Welcome mentor",
        });
    });

// only admin and student can access
userRouter
    .route("/student")
    .get(verifyToken, authorizeRoles("admin", "student"), (req, res) => {
        res.json({
            message: "Welcome student",
        });
    });
// mahak task => add a route for form only in studentRouter

export { userRouter };

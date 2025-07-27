import { Router } from "express";
import verifyToken from "../middlewares/auth.middlewares.js";
import authorizeRoles from "../middlewares/role.middlewares.js";
import { studentRouter } from "./student.routes.js";
import { adminRouter } from "./admin.routes.js";
import { mentorRouter } from "./mentor.routes.js";

const userRouter = Router();

// only admin can access
userRouter.use("/admin", verifyToken, authorizeRoles("admin"), adminRouter);

// only admin and mentor can access
userRouter.use(
    "/mentor",
    verifyToken,
    authorizeRoles("admin", "mentor"),
    mentorRouter
);

// only admin and student can access
userRouter.use(
    "/student",
    verifyToken,
    authorizeRoles("admin", "student"),
    studentRouter
);

export { userRouter };

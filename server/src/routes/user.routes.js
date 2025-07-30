import { Router } from "express";
import verifyToken from "../middlewares/auth.middlewares.js";
import authorizeRoles from "../middlewares/role.middlewares.js";
import { studentRouter } from "./student.routes.js";
import { adminRouter } from "./admin.routes.js";
import { mentorRouter } from "./mentor.routes.js";

const userRouter = Router();

// only admin can access
userRouter.use("/admin", verifyToken, authorizeRoles("admin"), adminRouter);

// only mentor can access
userRouter.use("/mentor", verifyToken, authorizeRoles("mentor"), mentorRouter);

// only student can access
userRouter.use(
    "/student",
    verifyToken,
    authorizeRoles("student"),
    studentRouter
);

export { userRouter };

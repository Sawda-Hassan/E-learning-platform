import express from "express";
import { protect, authorize } from "../middleware/auth.js";
import { reviewCourses, approveCourse, rejectCourse } from "../controllers/adminController.js";

const router = express.Router();
router.get("/courses", protect, authorize("admin"), reviewCourses);
router.patch("/courses/:id/approve", protect, authorize("admin"), approveCourse);
router.patch("/courses/:id/reject", protect, authorize("admin"), rejectCourse);

export default router;

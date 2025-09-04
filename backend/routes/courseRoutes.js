import express from "express";
import { protect, authorize } from "../middleware/auth.js";
import { createCourse, getCourses, getMyCourses } from "../controllers/courseController.js";

const router = express.Router();
router.get("/", getCourses);
router.get("/mine", protect, authorize("instructor"), getMyCourses);
router.post("/", protect, authorize("instructor"), createCourse);

export default router;

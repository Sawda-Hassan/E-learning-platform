import express from "express";
import {
  enrollUser,
  getAllEnrollments,
  getUserEnrollments,
  updateEnrollmentStatus,
  deleteEnrollment,
} from "../controllers/entrollmentController.js";

const router = express.Router();

// POST /api/enrollments → Enroll a user
router.post("/", enrollUser);

// GET /api/enrollments → Get all enrollments
router.get("/", getAllEnrollments);

// GET /api/enrollments/user/:userId → Get a user’s enrollments
router.get("/user/:userId", getUserEnrollments);

// PUT /api/enrollments/:enrollmentId → Update enrollment status
router.put("/:enrollmentId", updateEnrollmentStatus);

// DELETE /api/enrollments/:enrollmentId → Delete enrollment
router.delete("/:enrollmentId", deleteEnrollment);

export default router;
    
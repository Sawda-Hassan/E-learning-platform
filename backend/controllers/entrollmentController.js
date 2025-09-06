import Enrollment from "../models/Enrollment.js";
import User from "../models/User.js";
import Course from "../models/Course.js";

// 📌 Enroll a user in a course
export const enrollUser = async (req, res) => {
  try {
    const { userId, courseId } = req.body;

    // Check if user & course exist
    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    if (!user || !course) {
      return res.status(404).json({ message: "User or Course not found" });
    }

    // Prevent duplicate enrollment
    const existing = await Enrollment.findOne({ student: userId, course: courseId });
    if (existing) {
      return res.status(400).json({ message: "User already enrolled in this course" });
    }

    const enrollment = await Enrollment.create({ student: userId, course: courseId });
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📌 Get all enrollments
export const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.find()
      .populate("student", "fullName email")
      .populate("course", "title category");
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📌 Get enrollments for a specific user
export const getUserEnrollments = async (req, res) => {
  try {
    const { userId } = req.params;
    const enrollments = await Enrollment.find({ student: userId })
      .populate("course", "title description category");
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📌 Update enrollment status (ex: completed/dropped)
export const updateEnrollmentStatus = async (req, res) => {
  try {
    const { enrollmentId } = req.params;
    const { status } = req.body;

    const enrollment = await Enrollment.findByIdAndUpdate(
      enrollmentId,
      { status },
      { new: true }
    );

    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    res.json(enrollment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📌 Delete enrollment
export const deleteEnrollment = async (req, res) => {
  try {
    const { enrollmentId } = req.params;
    const enrollment = await Enrollment.findByIdAndDelete(enrollmentId);

    if (!enrollment) {
      return res.status(404).json({ message: "Enrollment not found" });
    }

    res.json({ message: "Enrollment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

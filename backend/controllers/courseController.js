import Course from "../models/Course.js";

export const createCourse = async (req,res) => {
  try {
    const course = await Course.create({ ...req.body, instructor:req.user._id });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getCourses = async (req,res) => {
  const courses = await Course.find({ status:"Published" }).populate("instructor","fullName");
  res.json(courses);
};

export const getMyCourses = async (req,res) => {
  const courses = await Course.find({ instructor:req.user._id });
  res.json(courses);
};
export const getCourseById = async (req,res) => {
  try {
    const course = await Course.findById(req.params.id).populate("instructor","fullName email");
    if (!course) return res.status(404).json({ message:"Course not found" });
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }     
}
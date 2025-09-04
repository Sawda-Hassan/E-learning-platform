import Course from "../models/Course.js";

export const reviewCourses = async (req,res) => {
  const pending = await Course.find({ status:"Pending" }).populate("instructor","fullName email");
  res.json(pending);
};

export const approveCourse = async (req,res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, { status:"Published" }, { new:true });
  res.json(course);
};

export const rejectCourse = async (req,res) => {
  const course = await Course.findByIdAndUpdate(req.params.id, { status:"Rejected" }, { new:true });
  res.json(course);
};

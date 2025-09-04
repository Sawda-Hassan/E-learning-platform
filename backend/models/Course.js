import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  category: String,
  level: { type: String, enum: ["Beginner","Intermediate","Advanced"], default:"Beginner" },
  price: { type: Number, default: 0 },
  isPaid: { type: Boolean, default: false },
  thumbnailUrl: String,
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, enum:["Draft","Pending","Published","Rejected"], default:"Draft" }
}, { timestamps: true });

export default mongoose.model("Course", courseSchema);

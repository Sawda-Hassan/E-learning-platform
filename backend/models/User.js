import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ["student","instructor","admin"], default: "student" },
  avatarUrl: String,
  bio: String
}, { timestamps: true });

export default mongoose.model("User", userSchema);

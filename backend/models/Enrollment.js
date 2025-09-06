import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",   // must match your User model name
      required: [true, "Student is required"],
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // must match your Course model name
      required: [true, "Course is required"],
    },
    paid: {
      type: Boolean,
      default: false,
    },
    progress: {
      percent: {
        type: Number,
        default: 0,
        min: [0, "Progress cannot be less than 0"],
        max: [100, "Progress cannot be more than 100"],
      },
      lastAccessed: {
        type: Date,
        default: Date.now,
      },
    },
    status: {
      type: String,
      enum: ["active", "completed", "cancelled"],
      default: "active",
    },
  },
  { timestamps: true }
);

// 🚫 Prevent same student enrolling in same course multiple times
enrollmentSchema.index({ student: 1, course: 1 }, { unique: true });

// 🔧 Helper method: update progress safely
enrollmentSchema.methods.updateProgress = function (value) {
  this.progress.percent = Math.min(100, Math.max(0, value));
  this.progress.lastAccessed = new Date();
  return this.save();
};

// 🔧 Virtual: check if enrollment is completed
enrollmentSchema.virtual("isCompleted").get(function () {
  return this.progress.percent >= 100 || this.status === "completed";
});

const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

export default Enrollment;

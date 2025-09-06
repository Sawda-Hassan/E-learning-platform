import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => res.send("E-Learning API ✅"));

app.use("/api/auth",   authRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/admin",   adminRoutes);
app.use("/api/enrollments", enrollmentRoutes);

// 404 + error (optional)
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
});

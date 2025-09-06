import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req,res,next) => {
  const auth = req.headers.authorization || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : null;
  if (!token) return res.status(401).json({ message:"Not authorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("_id email role");
    if (!req.user) return res.status(401).json({ message:"User not found" });
    next();
  } catch (err) {
    res.status(401).json({ message:"Token invalid" });
  }
};

export const authorize = (...roles) => (req,res,next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ message:"Forbidden" });
  }
  next();
};

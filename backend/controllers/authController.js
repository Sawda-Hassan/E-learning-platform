import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (req,res) => {
  try {
    const { fullName, email, password, role } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message:"Email already used" });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ fullName, email, passwordHash: hash, role });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn:"7d" });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req,res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message:"Invalid credentials" });

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return res.status(400).json({ message:"Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn:"7d" });
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

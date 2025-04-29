import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
});

const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  eventDate: String,
  message: String,
});

const User = mongoose.model("User", UserSchema);
const Contact = mongoose.model("Contact", ContactSchema);

// **User Registration**
app.post("/signup", async (req, res) => {
  const { name, email, phone, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ name, email, phone, password: hashedPassword });
  await user.save();
  res.json({ message: "User registered successfully" });
});

// **User Login**
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  res.json({ token, user });
});

// **Handle Contact Form Submission**
app.post("/contact", async (req, res) => {
  const { name, email, phone, eventDate, message } = req.body;
  const contact = new Contact({ name, email, phone, eventDate, message });
  await contact.save();
  res.json({ message: "Message sent successfully!" });
});

/// Get all registered users (For Admin Only)
app.get("/users", async (req, res) => {
    try {
      const users = await User.find({}, "-password"); // Exclude passwords for security
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch users" });
    }
  });
  
app.listen(5000, () => console.log("Server running on port 5000"));

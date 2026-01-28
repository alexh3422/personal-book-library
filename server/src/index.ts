import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors({ origin: "http://localhost:5173" })); // Allow Vite frontend
app.use(express.json());

// Root test route
app.get("/", (req, res) => {
  res.json({ message: "Book Library API is running 🚀" });
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/api/test", (req, res) => {
  res.json({ message: "Proxy working! Connected to backend from frontend" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

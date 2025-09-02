import express from "express";
import cors from "cors";

import connectDB from "./db-config/db.js";
import router from "./routes/taskRoutes.js";
import profileRouter from "./routes/profileRoutes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log("Incoming request:", req.method, req.url);
  next();
});

// Health-check
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use("/api/task", router);
app.use("/api/profile", profileRouter);

// Error handler
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

export { app };

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");
const statusMonitor = require("express-status-monitor");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

// ✅ Add express-status-monitor middleware
app.use(
  statusMonitor({
    title: "Task Manager Server Status",
    path: "/status", // access this URL to view dashboard
    spans: [
      { interval: 1, retention: 60 },   // 1 second, 1 minute
      { interval: 5, retention: 60 },   // 5 seconds, 5 minutes
      { interval: 15, retention: 60 },  // 15 seconds, 15 minutes
    ],
    chartVisibility: {
      cpu: true,
      mem: true,
      load: true,
      eventLoop: true,
      responseTime: true,
      rps: true,
      statusCodes: true,
    },
  })
);

// Middleware to handle CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/reports", reportRoutes);

// Serve uploads folder
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Root Route
app.get("/", (req, res) => {
  res.send("Task Manager API is running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

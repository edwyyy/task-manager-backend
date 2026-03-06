require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const { connect } = require("mongoose");

const app = express();

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");


// middleware
app.use(express.json());

// connect to database
connectDB();

// use routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// test route
app.get("/", (req, res) => {
    res.send("Task Manager API is running...");
});

// server start
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
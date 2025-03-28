const express = require("express");
const cors = require("cors");
const queryRoutes = require("./routes/queryRoutes");
const errorHandler = require("./middlewares/errorHandler"); // Import global error handler
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

const app = express();

// Security Middlewares
app.use(helmet()); // Helps secure Express apps by setting HTTP headers
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests

// Rate Limiting to prevent abuse
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Routes
app.use("/api", queryRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("Mini Data Query Simulation Engine is running! 🚀");
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;

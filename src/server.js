require("dotenv").config();
const express = require("express");
const app = require("./app");

// Define the port (fallback to 5000 if not set in .env)
const PORT = process.env.PORT || 5000;

// Start the server
const server = app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});

// Handle unexpected errors & shutdown gracefully
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception! Shutting down...", err);
    process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection at:", promise, "reason:", reason);
    server.close(() => process.exit(1));
});

process.on("SIGTERM", () => {
    console.log("SIGTERM received. Shutting down gracefully.");
    server.close(() => process.exit(0));
});

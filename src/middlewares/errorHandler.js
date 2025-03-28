const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.message || err); // Log the error for debugging

    res.status(err.status || 500).json({
        success: false,
        error: err.message || "Internal Server Error",
    });
};

module.exports = errorHandler;

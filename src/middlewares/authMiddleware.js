const authMiddleware = (req, res, next) => {
    console.log("Received Headers:", req.headers); // Log incoming headers for debugging

    const apiKey = req.headers["api-key"]; // Keep original logic

    console.log("Extracted API Key:", apiKey ? "****" + apiKey.slice(-4) : "None"); // Mask API key for security

    if (!apiKey) {
        return res.status(401).json({ error: "Unauthorized: API key is missing" });
    }

    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({ error: "Forbidden: Invalid API key" });
    }

    next(); // Proceed if valid
};

module.exports = authMiddleware;

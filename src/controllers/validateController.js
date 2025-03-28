const queryTranslator = require("../utils/queryTranslator");

exports.validateQuery = (req, res) => {
    try {
        const { query } = req.body;
        if (!query) {
            return res.status(400).json({ error: "Query is required" });
        }

        // Improved validation with error details
        const isValid = queryTranslator.isValidQuery(query);
        const validationMessage = isValid ? "Valid query" : "Invalid or unsafe query format";

        res.json({ query, isValid, message: validationMessage });
    } catch (error) {
        console.error("Error in validateQuery:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

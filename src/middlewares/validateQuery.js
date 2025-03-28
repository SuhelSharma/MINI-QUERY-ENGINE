const queryTranslator = require("../utils/queryTranslator");

const validateQuery = (req, res, next) => {
    try {
        const { query } = req.body;
        
        if (!query) {
            return res.status(400).json({ error: "Validation Error: Query is required" });
        }

        // Validate query syntax
        const isValid = queryTranslator.isValidQuery(query);

        if (!isValid) {
            return res.status(400).json({ error: "Validation Error: Query format is incorrect" });
        }

        next(); // Proceed to the next middleware or controller
    } catch (error) {
        console.error("Validation Error:", error);
        res.status(500).json({ error: "Internal Server Error during query validation" });
    }
};

module.exports = validateQuery;

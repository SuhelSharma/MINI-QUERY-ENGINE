const queryTranslator = require("../utils/queryTranslator");

exports.explainQuery = (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).json({ error: "Query is required" });
        }

        // Check if the query is valid before translating
        if (!queryTranslator.isValidQuery(query)) {
            return res.status(400).json({ error: "Invalid or unsupported query format" });
        }

        // Convert query to pseudo-SQL for explanation
        const translatedQuery = queryTranslator.translateToSQL(query);

        const explanation = {
            originalQuery: query,
            explanation: `This query fetches relevant data using: ${translatedQuery}`,
        };

        res.json(explanation);
    } catch (error) {
        console.error("Error in explainQuery:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const queryTranslator = require("../utils/queryTranslator");
const mockDB = require("../../data/mockDB.json"); // Adjust path if needed

exports.processQuery = (req, res) => {
    try {
        const { query } = req.body;
        if (!query) {
            return res.status(400).json({ error: "Query is required" });
        }

        // Validate query before processing
        if (!queryTranslator.isValidQuery(query)) {
            return res.status(400).json({ error: "Invalid or unsupported query format" });
        }

        // Convert natural language to pseudo-SQL
        const translatedQuery = queryTranslator.translateToSQL(query);
        const lowerQuery = translatedQuery.toLowerCase(); // Case-insensitive comparison

        // Simulate response based on query type
        let result;
        if (lowerQuery.includes("from users")) {
            result = mockDB.users || []; // Return mock user data
        } else if (lowerQuery.includes("from orders")) {
            result = mockDB.orders || []; // Return mock order data
        } else if (lowerQuery.includes("from products")) {
            result = mockDB.products || []; // Return mock product data
        } else {
            result = "No relevant data found.";
        }

        res.json({
            success: true,
            originalQuery: query,
            translatedQuery,
            result,
        });
    } catch (error) {
        console.error("Error processing query:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
};

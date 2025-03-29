const queryTranslator = require("../utils/queryTranslator");
const mockDB = require("../../data/mockDB.json"); // Adjust path if needed

exports.processQuery = (req, res) => {
    try {
        const { query } = req.body;
        const apiKey = req.headers["x-api-key"]; // Example: API key from headers

        // 🔐 Check if API key is provided & valid
        if (!apiKey || apiKey !== process.env.API_KEY) {
            return res.status(401).json({ error: "Unauthorized: Invalid API key" });
        }

        if (!query) {
            return res.status(400).json({ error: "Query is required" });
        }

        let translatedQuery;
        
        // Detect SQL or Natural Language
        if (query.trim().toLowerCase().startsWith("select")) {
            translatedQuery = query; // Direct SQL query
        } else {
            if (!queryTranslator.isValidQuery(query)) {
                return res.status(400).json({ error: "Invalid or unsupported query format" });
            }
            translatedQuery = queryTranslator.translateToSQL(query);
        }

        const lowerQuery = translatedQuery.toLowerCase();

        let result;
        if (lowerQuery.includes("from users")) {
            result = mockDB.users || [];
        } else if (lowerQuery.includes("from orders")) {
            result = mockDB.orders || [];
        } else if (lowerQuery.includes("from products")) {
            result = mockDB.products || [];
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

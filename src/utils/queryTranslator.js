const mockDB = require("../../data/mockDB.json"); // Adjust path to go two levels up

exports.translateToSQL = (query) => {
    if (!query || typeof query !== "string") {
        return "INVALID QUERY";
    }

    const lowerQuery = query.toLowerCase().trim(); // Normalize input

    // Simple logic to convert NL queries to pseudo-SQL
    if (lowerQuery.includes("list all users")) {
        return "SELECT * FROM users";
    } else if (lowerQuery.includes("show orders")) {
        return "SELECT * FROM orders";
    } else if (lowerQuery.includes("get product details")) {
        return "SELECT * FROM products";
    } else {
        return "UNKNOWN QUERY FORMAT";
    }
};

exports.isValidQuery = (query) => {
    if (!query || typeof query !== "string") {
        return false;
    }

    // Basic validation - Ensure query has meaningful words
    const keywords = ["list", "show", "get", "fetch", "find"];
    return keywords.some((word) => query.toLowerCase().includes(word));
};

exports.getMockData = (query) => {
    try {
        const sqlQuery = exports.translateToSQL(query);
        return mockDB.getData ? mockDB.getData(sqlQuery) : [];
    } catch (error) {
        console.error("Error fetching mock data:", error);
        return [];
    }
};

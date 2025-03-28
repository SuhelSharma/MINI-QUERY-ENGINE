exports.isSafeSQL = (query) => {
    if (!query || typeof query !== "string") {
        return false;
    }

    const lowerQuery = query.toLowerCase().trim();

    // Basic SQL injection prevention (Blocks dangerous patterns)
    const blacklistedPatterns = [
        "--",             // SQL comment
        ";",              // Multiple statements
        "drop table",     // Prevents table deletion
        "delete from",    // Prevents data deletion
        "truncate",       // Prevents table truncation
        "insert into",    // Blocks data insertion
        "update set",     // Blocks mass updates
        "exec",           // Prevents stored procedures execution
        "union select",   // Blocks UNION-based injections
    ];

    for (const pattern of blacklistedPatterns) {
        if (lowerQuery.includes(pattern)) {
            return false;
        }
    }

    // Basic structure check (Ensure SELECT queries)
    return lowerQuery.startsWith("select");
};

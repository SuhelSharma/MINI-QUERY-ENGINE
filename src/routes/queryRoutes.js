const express = require("express");
const { processQuery } = require("../controllers/queryController");
const { explainQuery } = require("../controllers/explainController");
const { validateQuery } = require("../controllers/validateController");
const authMiddleware = require("../middlewares/authMiddleware");
const validateQueryMiddleware = require("../middlewares/validateQuery"); // Ensure query is valid

const router = express.Router();

// Define API endpoints with enhanced validation & security
router.post("/query", authMiddleware, validateQueryMiddleware, processQuery);
router.get("/explain", authMiddleware, explainQuery);
router.post("/validate", authMiddleware, validateQuery);

module.exports = router;

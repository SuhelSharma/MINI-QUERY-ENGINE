const request = require("supertest");
const app = require("../app");

describe("Authentication Middleware", () => {
    it("should reject requests without an API key", async () => {
        const res = await request(app).post("/api/query");
        expect(res.status).toBe(401);
        expect(res.body).toHaveProperty("error", "API key is missing");
    });

    it("should reject requests with an invalid API key", async () => {
        const res = await request(app)
            .post("/api/query")
            .set("api-key", "wrong-key");
        expect(res.status).toBe(403);
        expect(res.body).toHaveProperty("error", "Invalid API key");
    });
});

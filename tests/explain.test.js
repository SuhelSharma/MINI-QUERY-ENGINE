const request = require("supertest");
const app = require("../app");

describe("Explain Query API", () => {
    it("should return an explanation for a valid query", async () => {
        const res = await request(app)
            .get("/api/explain?query=list all users")
            .set("api-key", process.env.API_KEY);

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("originalQuery", "list all users");
        expect(res.body).toHaveProperty("explanation");
    });

    it("should return an error for missing query", async () => {
        const res = await request(app)
            .get("/api/explain")
            .set("api-key", process.env.API_KEY);

        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty("error", "Query is required");
    });
});

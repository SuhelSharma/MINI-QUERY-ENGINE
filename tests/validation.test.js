const request = require("supertest");
const app = require("../app");

describe("Query Validation API", () => {
    it("should return true for valid queries", async () => {
        const res = await request(app)
            .post("/api/validate")
            .set("api-key", process.env.API_KEY)
            .send({ query: "list all users" });

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("isValid", true);
    });

    it("should return false for invalid queries", async () => {
        const res = await request(app)
            .post("/api/validate")
            .set("api-key", process.env.API_KEY)
            .send({ query: "random gibberish" });

        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("isValid", false);
    });

    it("should return an error for missing query", async () => {
        const res = await request(app)
            .post("/api/validate")
            .set("api-key", process.env.API_KEY)
            .send({});

        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty("error", "Query is required");
    });
});

const request = require("supertest");
const app = require("../app");

describe("Query Processing API", () => {
    it("should return mock user data for 'list all users'", async () => {
        const res = await request(app)
            .post("/api/query")
            .set("api-key", process.env.API_KEY)
            .send({ query: "list all users" });

        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.result).toBeInstanceOf(Array);
    });

    it("should return an error for missing query", async () => {
        const res = await request(app)
            .post("/api/query")
            .set("api-key", process.env.API_KEY)
            .send({});

        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty("error", "Query is required");
    });
});

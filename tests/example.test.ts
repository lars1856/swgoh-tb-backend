import request from "supertest";
import app from "../src/app";

describe("GET /", () => {
  it("should return a success message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("API is running with TypeScript!");
  });
});

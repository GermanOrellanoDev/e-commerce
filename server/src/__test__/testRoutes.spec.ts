import request from "supertest";
import express from "express";
import testRoutes from "../routes/testRoutes";

const app = express();
app.use(express.json());
app.use("/api", testRoutes);

describe("GET /api/test", () => {
  it("should return a message indicating the backend is working", async () => {
    const res = await request(app).get("/api/test");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty(
      "message",
      "¡El backend está funcionando correctamente!"
    );
  });
});

import request from "supertest";
import express from "express";
import jwt from "jsonwebtoken";
import orderRoutes from "../routes/orderRoutes";
import { config } from "../config/config";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use("/api/orders", orderRoutes);

dotenv.config();

describe("GET /api/orders", () => {
  let token: string;

  beforeAll(() => {
    token = jwt.sign(
      { id: "67b77cc78c33968d3595d7c7", email: "fede@gmail.com" },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" }
    );
  });

  it("should return 401 if no token is provided", async () => {
    const res = await request(app).get("/api/orders");
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message", "No autorizado");
  });

  it("should return 200 if a valid token is provided", async () => {
    const res = await request(app)
      .get("/api/orders")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

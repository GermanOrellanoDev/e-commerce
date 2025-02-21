import { NextFunction, Request, Response } from "express";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import testRoutes from "./routes/testRoutes";
import authRoutes from "./routes/authRoutes";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import userRoutes from "./routes/userRoutes";
import swaggerUi from "swagger-ui-express";
import { setupSwagger } from "./config/swagger";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

//rutas
app.use("/api", testRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

setupSwagger(app);

//middleware error
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.stack);
  res.status(500).json({ error: err.message });
});

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("✅ Mongo DB conectado");
    app.listen(PORT, () => console.log(`🚀 Servidor corriendo ${PORT}`));
  })
  .catch((error) => console.error("❌ Error conectando a MongoDB: ", error));

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/testRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Mongo DB conectado");
    app.listen(PORT, () => console.log(`Servidor corriendo ${PORT}`));
  })
  .catch((error) => console.error("Error conectando a MongoDB: ", error));

//rutas
app.use("/api", router);

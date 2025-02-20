import { Schema, model, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  createdAt: Date;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, default: "No description" },
  price: { type: Number, default: 0 },
  category: { type: String, required: true },
  image: { type: String, default: "" }, //agregar foto default
  stock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default model<IProduct>("Product", productSchema);

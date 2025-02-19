import { Schema, model, Document } from "mongoose";

export interface IOder extends Document {
  userId: Schema.Types.ObjectId;
  product: {
    productId: Schema.Types.ObjectId;
    quantity: number;
    price: number;
  }[];
  totalPrice: number;
  status: "pendiente" | "procesando" | "retirado" | "entregado" | "cancelado";
  createdAt: Date;
  updatedAt: Date;
}

const orderSchema = new Schema<IOder>(
  {
    userId: { type: Schema.Types.ObjectId, required: true },
    product: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pendiente", "procesando", "retirado", "entregado", "cancelado"],
      default: "pendiente",
    },
  },
  { timestamps: true }
);

export default model<IOder>("Order", orderSchema);

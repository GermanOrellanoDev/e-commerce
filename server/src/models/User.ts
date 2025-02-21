import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  verified: boolean;
  verificationCode?: string;
  createdAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" },
    verified: { type: Boolean, required: true, default: false },
    verificationCode: { type: String },
  },
  { timestamps: true }
);

export default model<IUser>("User", userSchema);

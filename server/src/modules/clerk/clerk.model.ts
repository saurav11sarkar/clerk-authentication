// models/clerk.model.ts
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { IClerk } from "./clerk.interface";
import config from "../../config";

const clerkSchema = new mongoose.Schema<IClerk>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

clerkSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, config.round);
  }
  next();
});

clerkSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

const Clerk = mongoose.model<IClerk>("Clerk", clerkSchema);
export default Clerk;

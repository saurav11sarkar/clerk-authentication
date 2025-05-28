import mongoose from "mongoose";
import { IClerk } from "./clerk.interface";
import bcrypt from "bcryptjs";
import config from "../../config";

const clerkSchema = new mongoose.Schema<IClerk>(
  {
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

clerkSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, Number(config.round));
  }
  next();
});

clerkSchema.post("save", async function (doc, next) {
  doc.password = "";
  next;
});

const Clerk = mongoose.model<IClerk>("Clerk", clerkSchema);
export default Clerk;

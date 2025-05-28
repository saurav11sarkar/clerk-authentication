import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import AppError from "./error/appError";
import { clerkMiddleware } from "@clerk/express";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(clerkMiddleware());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the backend",
  });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      status: "error",
      message: err.message,
    });
  } else {
    res.status(500).json({
      success: false,
      status: "error",
      message: "Internal server error",
    });
  }
});

export default app;

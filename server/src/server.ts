import mongoose from "mongoose";
import config from "./config";
import app from "./app";

const port = config.port || 8000;
const server = async () => {
  try {
    await mongoose.connect(config.db_url as string);
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`server is running on port http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Database connection failed");
    process.exit(1);
  }
};
server();

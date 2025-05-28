import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  db_url: process.env.DB_URL,
  jwt_secret: process.env.SECRET,
  clerk_secret_key: process.env.CLERK_SECRET_KEY,
  clerk_publishable_key: process.env.CLERK_PUBLISHABLE_KEY,
  round: process.env.ROUND,
};

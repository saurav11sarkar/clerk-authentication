// config/index.ts
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export default {
  port: process.env.PORT || 5000,
  dbUrl: process.env.DB_URL,
  jwtSecret: process.env.SECRET,
  clerkSecretKey: process.env.CLERK_SECRET_KEY,
  clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  round: Number(process.env.ROUND) || 10,
};

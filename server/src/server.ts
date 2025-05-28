// server.ts
import mongoose from 'mongoose';
import config from './config';
import app from './app';

const port = config.port;

const startServer = async () => {
  try {
    await mongoose.connect(config.dbUrl as string);
    console.log('Database connected successfully');

    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Database connection failed', error);
    process.exit(1);
  }
};

startServer();

import express from 'express';
import { clerkRoutes } from '../modules/clerk/clerk.routes';


const router = express.Router();

router.use('/clerk', clerkRoutes);

export default router;

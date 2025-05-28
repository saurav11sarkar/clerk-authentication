import express from 'express';

import { requireAuth } from '@clerk/express';
import { clerksController } from './clerk.controller';
import { auth } from '../../middlewares/auth';


const router = express.Router();

router.post('/register', clerksController.register);
router.post('/login', clerksController.login);
router.get('/', requireAuth(), auth(['admin', 'user']), clerksController.getProfile);

export const clerkRoutes = router;

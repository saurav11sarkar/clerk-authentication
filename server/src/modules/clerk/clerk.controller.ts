// controllers/clerk.controller.ts
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsycn';
import sendResponse from '../../utils/sendResponse';
import { clerkService } from './clerk.service';


const register = catchAsync(async (req: Request, res: Response) => {
  const result = await clerkService.register(req.body);
  sendResponse(res, 201, 'Registered successfully', result);
});

const login = catchAsync(async (req: Request, res: Response) => {
  const { token, user } = await clerkService.login(req.body);

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });

  sendResponse(res, 200, 'Login successful', { user });
});

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.auth;
  sendResponse(res, 200, 'Profile fetched', user);
});

export const clerksController = {
  register,
  login,
  getProfile,
};

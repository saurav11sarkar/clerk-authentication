// services/clerk.service.ts
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { IClerk } from './clerk.interface';
import Clerk from './clerk.model';
import AppError from '../../error/appError';
import config from '../../config';


const register = async (payload: IClerk) => {
  const user = await Clerk.create(payload);
  return { id: user._id, email: user.email };
};

const login = async ({ email, password }: IClerk) => {
  const user = await Clerk.findOne({ email });
  if (!user) throw new AppError(401, 'Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new AppError(401, 'Invalid credentials');

  const token = jwt.sign(
    {
      sub: user._id,
      role: user.role,
      email: user.email,
    },
    config.jwtSecret as string,
    { expiresIn: '1h' }
  );

  return { token, user };
};

const profile = async (id: string) => {
  const user = await Clerk.findById(id);
  return user;
};

export const clerkService = { register, login, profile };

// middlewares/auth.ts
import { NextFunction, Request, Response } from 'express';
import AppError from '../error/appError';


export const auth = (roles: string[] | string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const role = req.auth?.sessionClaims?.role;

    if (!role) {
      return next(new AppError(401, 'Unauthorized'));
    }

    const allowedRoles = Array.isArray(roles) ? roles : [roles];
    if (!allowedRoles.includes(role)) {
      return next(new AppError(403, 'Forbidden'));
    }

    next();
  };
};

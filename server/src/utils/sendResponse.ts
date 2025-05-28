// utils/sendResponse.ts
import { Response } from 'express';

type ResponseData<T> = {
  success: boolean;
  message: string;
  data?: T;
};

const sendResponse = <T>(res: Response, statusCode: number, message: string, data?: T) => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  } as ResponseData<T>);
};

export default sendResponse;

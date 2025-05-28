// utils/appError.ts
export default class AppError extends Error {
  statusCode: number;
  originalError?: string;

  constructor(statusCode: number, message: string, error?: string, stack?: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;

    if (error) {
      this.originalError = error;
    }

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

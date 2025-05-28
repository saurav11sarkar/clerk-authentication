import '@clerk/express';

declare global {
  namespace Express {
    interface Request {
      auth?: {
        userId?: string;
        sessionId?: string;
        sessionClaims?: {
          role?: string;
          [key: string]: any;
        };
        [key: string]: any;
      };
    }
  }
}

export interface IClerk {
  clerkId: string;
  name: string;
  email: string;
  password: string;
  role?: "user" | "admin";
}

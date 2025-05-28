export interface IClerk {
  name: string;
  email: string;
  password: string;
  role?: 'user' | 'admin';
}

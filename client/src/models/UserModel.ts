export interface UserModel {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  verified: boolean;
  verificationCode?: string;
  createdAt: Date;
}

import api from "./api";

export interface LoginResponse {
  token: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
}

export interface RegisterResponse {
  name: string;
  lastname: string;
  email: string;
  role: string;
  verified: boolean;
  _id: string;
}

export interface VerifyResponse {
  verified: boolean;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

export interface VerifyData {
  email: string;
  code: string;
}

export const loginUser = async (
  loginData: LoginData
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/auth/login", loginData);
  return response.data;
};

export const registerUser = async (
  registerData: RegisterData
): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>(
    "/auth/register",
    registerData
  );
  return response.data;
};

export const verifyUser = async (
  verifyData: VerifyData
): Promise<VerifyResponse> => {
  const response = await api.post<VerifyResponse>("/auth/verify", verifyData);
  return response.data;
};

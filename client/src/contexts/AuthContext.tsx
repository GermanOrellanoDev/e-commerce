import { createContext, useState, useEffect, ReactNode } from "react";
/* import { UserModel } from "../models/UserModel"; */
import { LoginResponse } from "../services/authService";
import api from "../services/api";

/* export interface UserContext extends UserModel {
  token: string;
} */

interface AuthContextType {
  user: LoginResponse | null; //se cambió UserContext por LoginResponse
  login: (userData: LoginResponse) => void; //se cambió UserContext por LoginResponse
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<LoginResponse | null>(null); //se cambió UserContext por LoginResponse

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData: LoginResponse) => {
    //se cambió UserContext por LoginResponse
    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);

    sessionStorage.removeItem("user");
    delete api.defaults.headers.common.Authorization;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

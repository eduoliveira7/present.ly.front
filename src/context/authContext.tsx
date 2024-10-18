
import React, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import axios from 'axios';

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => void;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", null);
  const navigate = useNavigate();

  const backendUrl = import.meta.env.VITE_API_URL;

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${backendUrl}/auth/login`, { email, password });
      const { token } = response.data;

      setToken(token);
      setUser(email);

      navigate('/dashboard');
    } catch (error) {
      console.error("Erro de login:", error);
      alert("Usuário ou senha inválidos");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      token
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

export { useAuth, AuthProvider }
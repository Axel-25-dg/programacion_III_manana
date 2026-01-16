import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import type { JSX } from "react";

export default function RequireAuth({ children }: { children: JSX.Element }) {
  const { token } = useAuth();
  
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  
  return children;
}
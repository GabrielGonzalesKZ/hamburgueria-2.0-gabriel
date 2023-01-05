import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import { UserContext } from "../../Contexts/UserContext";

export const ProtectedRoutes = () => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

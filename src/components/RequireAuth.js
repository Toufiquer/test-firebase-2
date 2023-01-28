import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useCustomAuthState from "./hooks/useCustomAuthState";

const RequireAuth = ({ children }) => {
  const customAuth = useCustomAuthState();
  let location = useLocation();
  if (!customAuth) {
    return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAuth;

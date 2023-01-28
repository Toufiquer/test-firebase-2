import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase";
import Loading from "./Loading";

const customId = "custom-id-for-toast";
const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    toast.error(error?.message, {
      toastId: customId,
    });
  }
  if (!user) {
    return <Navigate to="/logIn" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAuth;

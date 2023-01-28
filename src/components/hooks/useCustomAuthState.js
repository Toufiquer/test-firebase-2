import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase";

const useCustomAuthState = () => {
  const [user, loading, error] = useAuthState(auth);
  if (error) {
    toast(error.message);
  }
  if (loading) {
    return <loading></loading>;
  }
  return user;
};

export default useCustomAuthState;

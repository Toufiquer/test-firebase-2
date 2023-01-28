import React from "react";

import { useSignOut } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase";
const useCustomSignOut = () => {
  const [signOut, loading, error] = useSignOut(auth);
  if (error) {
    toast(error.message);
  }
  if (loading) {
    return <loading></loading>;
  }
  return signOut;
};

export default useCustomSignOut;

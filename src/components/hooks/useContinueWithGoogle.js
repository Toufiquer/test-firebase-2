import React from "react";

import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase";
const useContinueWithGoogle = () => {
  const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);
  if (error) {
    toast(error.message);
  }
  if (loading) {
    return <loading></loading>;
  }
  return signInWithGoogle;
};

export default useContinueWithGoogle;

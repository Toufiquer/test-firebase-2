import { Button } from "flowbite-react";
import React, { useEffect } from "react";
import googleIcon from "./icon/google.png";
import faceBookIcon from "./icon/facebook.png";
import githubIcon from "./icon/github.png";
import { useSignInWithFacebook, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase";
import Loading from "./Loading";
import { toast } from "react-toastify";
const customId = "custom-id-for-toast";
const Social = () => {
  const [signInWithFacebook, userFacebook, loading, error] = useSignInWithFacebook(auth);
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
  if (userFacebook?.user?.uid || userGoogle?.user?.uid) {
    toast.success("Successfully Logged In", {
      toastId: customId,
    });
  }
  if (loading || loadingGoogle) {
    return <Loading />;
  }
  if (error || errorGoogle) {
    toast.error(error?.message || errorGoogle?.message, {
      toastId: customId,
    });
  }
  return (
    <div className={`container mx-auto p-4 flex flex-col gap-4 max-w-[480px]`}>
      <Button onClick={() => signInWithGoogle()} className={`border-2 border-solid border-purple-600 mb-2 p-2 text-black cursor-pointerw-full flex items-center justify-center rounded font-semibold hover:text-white hover:bg-purple-600 duration-300 bg-purple-500`}>
        <img className={`h-8 w-8 mr-2 bg-slate-300 rounded-xl`} src={googleIcon} alt="Google Icon" /> Continue With Google
      </Button>
      <Button onClick={() => signInWithFacebook()} className={`border-2 border-solid border-purple-600 mb-2 p-2 text-black cursor-pointerw-full flex items-center justify-center rounded font-semibold hover:text-white hover:bg-purple-600 duration-300 bg-purple-500`}>
        <img className={`h-8 w-8 mr-2 bg-slate-300 rounded-xl`} src={faceBookIcon} alt="Google Icon" /> Continue With FaceBook
      </Button>
      <Button className={`border-2 border-solid border-purple-600 mb-2 p-2 text-black cursor-pointerw-full flex items-center justify-center rounded font-semibold hover:text-white hover:bg-purple-600 duration-300 bg-purple-500`}>
        <img className={`h-8 w-8 mr-2 bg-slate-300 rounded-xl`} src={githubIcon} alt="Google Icon" /> Continue With GitHub
      </Button>
    </div>
  );
};

export default Social;

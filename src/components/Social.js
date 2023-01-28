import { Button } from "flowbite-react";
import React from "react";
import googleIcon from "./icon/google.png";
import faceBookIcon from "./icon/facebook.png";
import githubIcon from "./icon/github.png";
import useContinueWithGoogle from "./hooks/useContinueWithGoogle";
const Social = () => {
  const signInWithGoogle = useContinueWithGoogle();
  return (
    <div className={`container mx-auto p-4 flex flex-col gap-4 max-w-[480px]`}>
      <Button onClick={() => signInWithGoogle()} className={`border-2 border-solid border-purple-600 mb-2 p-2 text-black cursor-pointerw-full flex items-center justify-center rounded font-semibold hover:text-white hover:bg-purple-600 duration-300 bg-purple-500`}>
        <img className={`h-8 w-8 mr-2 bg-slate-300 rounded-xl`} src={googleIcon} alt="Google Icon" /> Continue With Google
      </Button>
      <Button className={`border-2 border-solid border-purple-600 mb-2 p-2 text-black cursor-pointerw-full flex items-center justify-center rounded font-semibold hover:text-white hover:bg-purple-600 duration-300 bg-purple-500`}>
        <img className={`h-8 w-8 mr-2 bg-slate-300 rounded-xl`} src={faceBookIcon} alt="Google Icon" /> Continue With FaceBook
      </Button>
      <Button className={`border-2 border-solid border-purple-600 mb-2 p-2 text-black cursor-pointerw-full flex items-center justify-center rounded font-semibold hover:text-white hover:bg-purple-600 duration-300 bg-purple-500`}>
        <img className={`h-8 w-8 mr-2 bg-slate-300 rounded-xl`} src={githubIcon} alt="Google Icon" /> Continue With GitHub
      </Button>
    </div>
  );
};

export default Social;

import { Button, Label, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useAuthState, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase";
import Loading from "./Loading";
import Social from "./Social";
const customId = "custom-id-for-toast";
const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [signInWithEmailAndPassword, userEmailPass, loadingEmailPass, errorEmailPass] = useSignInWithEmailAndPassword(auth);
  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user?.uid) {
      navigate(from);
    }
  }, [user?.uid, from, navigate]);
  if (userEmailPass) {
    toast.success("Successfully LogIn", {
      toastId: customId,
    });
  }
  if (loading || loadingEmailPass) {
    return <Loading />;
  }
  if (error || errorEmailPass) {
    toast.error(error?.message || errorEmailPass?.message, {
      toastId: customId,
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className={`min-h-screen bg-blue-200 p-4 grid grid-cols-1 md:grid-cols-2`}>
      <div className="p-4 border-2 border-solid border-blue-600 w-[480px] h-[360px] rounded mx-auto ">
        <h2 className={`text-center text-2xl mb-2 font-semibold`}>Please Log In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              onBlur={(e) => {
                setEmail(e.target.value);
              }}
              id="email1"
              type="email"
              placeholder="name@flowbite.com"
              required={true}
              className={`w-full text-black`}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput
              onBlur={(e) => {
                setPassword(e.target.value);
              }}
              id="password1"
              type="password"
              required={true}
            />
          </div>
          <Label htmlFor="agree">
            New Here,{" "}
            <Link to="/signUp" className="text-blue-600 hover:underline dark:text-blue-500">
              Continue With Registration
            </Link>
          </Label>
          <Button type="submit" className={`border-2 border-solid border-purple-600 mb-2 p-2 text-black cursor-pointer flex items-center justify-center rounded font-semibold hover:text-white hover:bg-purple-600 duration-300 bg-purple-500 w-full`}>
            Log In
          </Button>
        </form>
      </div>
      <Social></Social>
    </div>
  );
};

export default LogIn;

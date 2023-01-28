import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import Social from "./Social";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div className={`min-h-screen bg-blue-200 p-4 grid grid-cols-1 md:grid-cols-2`}>
      <div className="p-4 border-2 border-solid border-blue-600 w-[480px] h-[360px] rounded mx-auto ">
        <h2 className={`text-center text-2xl mb-2 font-semibold`}>Please Log In</h2>
        <form onClick={handleSubmit} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required={true} className={`w-full text-black`} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" type="password" required={true} />
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

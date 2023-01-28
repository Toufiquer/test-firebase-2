import React from "react";
import { Link } from "react-router-dom";
import useCustomAuthState from "./hooks/useCustomAuthState";
import useCustomSignOut from "./hooks/useCustomSignOut";
const Navbar = () => {
  const customCss = "text-xl font-semibold px-4 cursor-pointer hover:text-green-900 duration-700 hover:underline";
  const customAuthState = useCustomAuthState();
  const signOut = useCustomSignOut();
  return (
    <div className="bg-blue-400 py-4 text-white">
      <div className="container mx-auto">
        <div className={`flex justify-between items-center`}>
          <Link to="/" className="text-3xl cursor-pointer">
            Toufiquer
          </Link>
          <ul className={`flex items-center`}>
            <li>
              <Link className={customCss} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={customCss} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={customCss} to="/private">
                Private
              </Link>
            </li>
            {!customAuthState ? (
              <>
                <li>
                  <Link className={customCss} to="/logIn">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link className={customCss} to="/signUp">
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link onClick={() => signOut()} className={customCss} to="/signUp">
                  Log Out
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

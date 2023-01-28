import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase";
import Loading from "./Loading";
const customId = "custom-id-for-toast";
const Navbar = () => {
  const customCss = "text-xl font-semibold px-4 cursor-pointer hover:text-green-900 duration-700 hover:underline";
  const [user, loading, error] = useAuthState(auth);
  const [signOut, loadingSignOut, errorSignOut] = useSignOut(auth);
  if (loading || loadingSignOut) {
    return <Loading />;
  }
  if (error || errorSignOut) {
    toast.error(error?.message || errorSignOut?.message, {
      toastId: customId,
    });
  }
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
            {!user ? (
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

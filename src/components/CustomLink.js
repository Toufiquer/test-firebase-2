import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const customCss = "text-xl font-semibold px-4 cursor-pointer hover:text-green-900 duration-700 hover:underline";
const CustomLink = ({ to, children }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link className={`${match ? "underline" : " "} ${customCss}`} to={to}>
      {children}
    </Link>
  );
};

export default CustomLink;

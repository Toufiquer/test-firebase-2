import React from "react";

const NotFound = () => {
  return (
    <div className={`min-h-screen bg-blue-300 flex flex-col items-center justify-center text-6xl`}>
      <h2>Ops! </h2>
      <p className={`text-sm font-thin ml-[140px] mt-[-5px]`}>Nothing Was Found</p>
      <p className={`text-4xl font-thin`}> Try Another One</p>
    </div>
  );
};

export default NotFound;

import { Button, Spinner } from "flowbite-react";
import React from "react";

const Loading = () => {
  return (
    <div className={`min-h-screen bg-blue-300 flex items-center justify-center text-6xl`}>
      <div className="flex flex-row gap-3">
        <Button>
          <Spinner size="xl" aria-label="Spinner button example" />
          <span className="pl-3 text-3xl font-thin">Loading...</span>
        </Button>
      </div>
    </div>
  );
};

export default Loading;

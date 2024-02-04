import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className=" h-[100vh] flex items-center justify-center">

<div className="flex flex-col  items-center  justify-center ">
      <div className="felx flex-col  items-center text-center w-[50%] h-100vh justify-center">
        <div className=" text-green-800 text-9xl font-extrabold">Oops!</div>
        <div className="text-black font-bold mt-5 text-2xl">404-Page not found </div>
        <div className="text-green-500">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </div>
        <div className="flex justify-center mt-6">
          <Link className="w-[50%]" href="/">
          <div className="text-white bg-green-800 p-2  rounded-md cursor-pointer hover:bg-green-950 ">
            Go to Home page
          </div>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default NotFound;

import Logo from "@/components/logo";
import React from "react";

const Forgotpass = () => {
  return (
    <div className="flex justify-center mt-20 overflow-x-hidden">
      <div className="shadow-2xl   w-[80%] md:w-[30%] rounded-lg p-4 h-[80vh] ">
        <div className="flex justify-center">
          <Logo />
        </div>

        <div className="ml-6 mt-8">
          <div className="text-lg md:text-3xl font-extrabold  text-green-800">
            {" "}
            Find your Account
          </div>
          <div className="text-gray-400 text-justify mr-4 md:mr-20">
            Enter email, phone number or username associated with the account to
            chnage the password of the account
          </div>
          <input
            type="text"
            name=""
            placeholder="Email, phone number or username "
            className="w-full mt-8 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <button
            className="w-full mt-4 bg-green-800 text-white rounded p-2"
            type="button"
          >
            Find My Account
          </button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Forgotpass;

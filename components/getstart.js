'use client'
import Link from "next/link";
import { useState } from "react";
import { IoMdBriefcase, IoMdWallet } from "react-icons/io";

const Getstart = () => {
  const [userType, setUserType] = useState("");

  const handleRadioChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <div className="border border-green-800 rounded-md p-8 ">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-48">
        <div className="shadow-lg flex flex-col p-4 rounded-md w-[10em]">
          <div className="flex justify-between p-4 ">
            <IoMdBriefcase />
            <input type="radio" name="usertype" value="investor" onChange={handleRadioChange} />
          </div>
          <div className="border border-b border-gray-400"></div>
          <div className="font-bold text-md">
            I am an Investor, Looking for an Idea
          </div>
        </div>

        <div className="shadow-lg flex flex-col p-4 rounded-md w-[10em]">
          <div className="flex justify-between p-4">
            <IoMdWallet />
            <input type="radio" name="usertype" value="entrepreneur" onChange={handleRadioChange} />
          </div>
          <div className="border border-b border-gray-400"></div>
          <div className="font-bold text-md">
            I am an Entrepreneur, Looking for an Investor
          </div>
        </div>
      </div>

      <Link href={userType === "entrepreneur" ? "/sign_enterpreneur" : "/signup"}>
        <div className="text-center bg-green-800 hover:bg-green-900 text-white rounded-md p-2 mt-8 block m-auto">
          Sign Up
        </div>
      </Link>
    </div>
  );
};

export default Getstart;

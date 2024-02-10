import Link from "next/link";
import { useState } from "react";
import { IoMdBriefcase, IoMdWallet } from "react-icons/io";

const Getstart = () => {
  const [userType, setUserType] = useState("")
  const handleRadioChange = (event) => {
    setUserType = event.target.value;
  };

  // Function to render link based on user type
  const renderSignUpLink = () => {
    if (userType === "investor") {
      return (
        <Link href="/investor-signup">
          <a className="bg-green-800 hover:bg-green-900 text-white rounded-md p-2 mt-8 block m-auto">
            Sign Up
          </a>
        </Link>
      );
    } else if (userType === "entrepreneur") {
      return (
        <Link href="/entrepreneur-signup">
          <a className="bg-green-800 hover:bg-green-900 text-white rounded-md p-2 mt-8 block m-auto">
            Sign Up
          </a>
        </Link>
      );
    } else {
      return null; // If userType is not selected, render nothing
    }
  };
  return (
    <div className="border border-green-800 rounded-md p-8 ">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-48"><div className="shadow-lg flex flex-col  p-2 rounded-md w-[10em]">
        <div className="flex justify-between ">
          <IoMdBriefcase />
          <input type="radio" name="usertype" value="investor" onChange={handleRadioChange} />
        </div>
        <div className="border border-b border-gray-400 "></div>
        <div className="font-bold text-md">
          I am a Investor, Looking for a Idea
        </div>
      </div>

      <div className="shadow-lg flex flex-col  p-2 rounded-md w-[10em]">
        <div className="flex justify-between ">
          <IoMdWallet />
          <input type="radio" name="usertype" value="entrepreneur" onChange={handleRadioChange} />
        </div>
        <div className="border border-b border-gray-400 "></div>
        <div className="font-bold text-md">
          I am a Entrepreneur, Looking for a Investor
        </div>
      </div>
      </div>

      {renderSignUpLink}




    </div>
  );
};

export default Getstart;

import Link from "next/link";
import { IoMdBriefcase, IoMdWallet } from "react-icons/io";

const Getstart = () => {
  return (
    <div className="border border-green-800 rounded-md p-8 ">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-48"><div className="shadow-lg flex flex-col  p-2 rounded-md w-[10em]">
        <div className="flex justify-between ">
          <IoMdBriefcase />
          <input type="radio" name="investor" />
        </div>
        <div className="border border-b border-gray-400 "></div>
        <div className="font-bold text-md">
          I am a Investor, Looking for a Idea
        </div>
      </div>

      <div className="shadow-lg flex flex-col  p-2 rounded-md w-[10em]">
        <div className="flex justify-between ">
          <IoMdWallet />
          <input type="radio" name="investor" />
        </div>
        <div className="border border-b border-gray-400 "></div>
        <div className="font-bold text-md">
          I am a Entrepreneur, Looking for a Investor
        </div>
      </div>
      </div>

      <Link href="/signup"><button className="bg-green-800 hover:bg-green-900 text-white rounded-md p-2 mt-8 block m-auto">
            Sign Up
          </button></Link>




    </div>
  );
};

export default Getstart;

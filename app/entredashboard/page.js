"use client";
import Card from "@/components/card";
import Entinfo from "@/components/entinfo";
import Footer from "@/components/footer";
import Logo from "@/components/logo";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Entdashboard = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [toggle, setToggle] = useState("1");
 

  if (status === "authenticated") {
    const onClick2 = () => {
      setToggle(2); // Use setToggle to update state
    };
  
    const onClick1 = () => {
      setToggle(1); // Use setToggle to update state
    };
    return (

      <div>
        {/* logo */}
        <div className="ml-4 mt-2">
          <Logo />
        </div>
        <div className="flex justify-center mb-8">
          <div className="text-3xl font-semibold text-green-800">
            Enterperneur <span className="text-black">Dashboard</span>
          </div>
        </div>
        {/* main container */}
        <div className="flex gap-4 bg-gray-100 h-[70vh] p-8">
          {/* profile section */}
          <div className="flex flex-col p-4 bg-white w-1/3 rounded-md h-[60vh]">
            <div className="font-bold">My Profile</div>
            {/* image and name section */}
            <div className="flex items-center flex-col  ">
              <img
                className="flex h-20 w-20 rounded-full mt-8 justify-center"
                src="https://unsplash.com/photos/a-woman-with-long-hair-and-a-black-shirt-Ud4bLEy4gC0"
                alt="Image Description"
              />
              <div className="font-bold text-lg text-center">
                Hello {session?.user?.email}
              </div>
              <div className="p-1 border border-green-900 rounded-lg text-sm cursor-pointer hover:font-bold mb-2">
                Edit
              </div>
            </div>
            {/* other profile details */}
            <div className="font-bold">
              Email :{" "}
              <span className="font-normal">sampadatandan127@gmail.com</span>
            </div>
            <div className="font-bold">
              Phone : <span className="font-normal">+977 9841724242</span>
            </div>
            {/* <div className="font-bold">Job : <span className="font-normal">CEO</span></div> */}
            {/* <div className="font-bold">Company : <span className="font-normal">Investor hub</span></div> */}

            <button
              onClick={signOut}
              className="bg-green-800 p-2 rounded-md text-white font-bold"
            >
              signout
            </button>
          </div>
          {/* main section of the dashbaord  */}
          <div className="flex flex-col bg-white w-2/3 rounded-md h-[60vh] p-4">
            {/* button part */}
            <div className="flex gap-8 mb-8 ml-8">
              <button onClick ={onClick1} className="bg-green-600 w-[150px] text-white font-bold p-2 rounded-md text-center">
                Idea info{" "}
              </button>
              <button onClick={onClick2} className="bg-green-600 w-[150px] text-white font-bold p-2 rounded-md text-center">
                Uploaded idea
              </button>
              <Link href="/form">
                <button className="bg-green-600 w-[150px] text-white font-bold p-2 rounded-md text-center">
                  Add idea
                </button>
              </Link>
            </div>
            {/* content part */}
            {/* info part */}
            <div className="">
              <div className="bg-gray-100 p-4 rounded-md flex justify-center items-center h-[45vh] overflow-x-scroll">
                {toggle===2 ? <Card/> :<Entinfo/>}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  } else if (status === "loading") {
    return <div className="">loading</div>;
  } else {
    router.push("/login");
  }
};

export default Entdashboard;

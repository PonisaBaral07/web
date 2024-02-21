'use client'
import { useState } from "react";
import Card from "./card";
import Entinfo from "./entinfo";
import Link from "next/link";
const EntdashboardContent = () => {
  const [toggle, setToggle] = useState("1");
 
    const onClick2 = () => {
      setToggle(2); // Use setToggle to update state
    };
  
    const onClick1 = () => {
      setToggle(1); // Use setToggle to update state
    };
  return (
    <div>{/* button part */}
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
    </div></div>
  )
}

export default EntdashboardContent
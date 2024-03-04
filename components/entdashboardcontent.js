'use client'
import { useState } from "react";
import Card from "./card";
import Entinfo from "./entinfo";
import Link from "next/link";
const EntdashboardContent = ({userId, ideaDetails}) => {
  const ideaByuserId = ideaDetails.foundIdea;
  return (
    <div>{/* button part */}
    <div className="flex gap-8 mb-8 ml-8">
      
      <button  className="bg-green-600 w-[150px] text-white font-bold p-2 rounded-md text-center">
        Uploaded idea
      </button>
      <Link href={{
        pathname: "/form",
        query: {userId: userId}
      }}>
        <button className="bg-green-600 w-[150px] text-white font-bold p-2 rounded-md text-center">
          Add idea
        </button>
      </Link>
    </div>
    {/* content part */}
    {/* info part */}
    <div className="p-2 overflow-x-scroll ">
      <div className="bg-gray-100 p-4 rounded-md flex justify-center items-center h-[50vh] overflow-x-scroll ">
         <Card ideaDetail={ideaByuserId} /> 
      </div>
    </div></div>
  )
}

export default EntdashboardContent
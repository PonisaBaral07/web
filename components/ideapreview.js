'use client'
import Logo from "./logo";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Comment from "./comment";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Ideaview = ({ideaId}) => {
  const [ideaData, setIdeaData] = useState([]);
  useEffect(()=>
  {
    const fetchData = async(ideaId) =>
    {
      console.log(ideaId);
      const response = await fetch(`http://localhost:3000/api/indidea/${ideaId}`);
      const results = await response.json();
      console.log(results);
      const result = results.foundIdea;
      console.log(result);
      setIdeaData(result);

    }
    fetchData(ideaId);
    console.log(ideaData)
  },[])
    const pdfUrl = 'my.pdf';
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
   {ideaData.map(idea=>(
    
    <div key ={idea._id}>
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="text-center text-gray-400">
        Your Success is our algorithm
      </div>
      <div className="flex flex-col gap-4 bg-gray-50 w-[75%] md:w-[75%] p-2 m-auto rounded-sm shadow-md mt-2">
        <div className="w-[100%]">
          {/* title */}
          <div className="font-extrabold text-2xl text-green-800">
            {idea.title}
          </div>
          {/* category */}
          <div className="text-gray-400">{idea.category}</div>
        </div>
      </div>
      {/* project team */}
      <div className="flex flex-col gap-4 bg-gray-50 w-[75%] md:w-[75%] p-2 m-auto rounded-sm shadow-md mt-4">
        <div className="w-[100%]">
          {/* title */}
          <div className="font-bold text-lg text-green-800 underline text-center">
            Project Team
          </div>
          <div className="font-bold text-lg text-green-800 underline">
           {idea.patnername}
          </div>
          {/* Qualification */}
          <div className="text-gray-400">{idea.patnerqual} </div>
          <div className="text-gray-400">
            Email: <span className="text-black">{idea.patneremail}</span>
          </div>
          <div className="text-gray-400">
            Phone: <span className="text-black">{idea.patnerphone}</span>
          </div>
        </div>
      </div>
      {/* project pricing */}
      <div className="flex flex-col gap-4 bg-gray-50 w-[75%] md:w-[75%] p-2 m-auto rounded-sm shadow-md mt-4">
        <div className="w-[100%]">
          <div className="text-gray-400">
            Estimated Budget: <span className="text-black">{idea.price}</span>
          </div>
        </div>
      </div>

      {/* Summary of project */}
      
      <div className="flex flex-col gap-4 bg-gray-50 w-[75%] md:w-[75%] p-2 m-auto rounded-sm shadow-md mt-4">
      <div className="font-bold text-lg text-green-800 underline ">
            Project Summary
          </div>
        <div className="w-[100%]">
          <div className="text-justify">
          {idea.projectsummary}
          </div>
        </div>
      </div>
      

      {/* pdf viewer */}

      {/* <div className="flex flex-col gap-4 bg-gray-50 w-[75%] md:w-[75%] p-2 m-auto rounded-sm shadow-md mt-4">
      <div className="font-bold text-lg text-green-800 underline ">
            Project proposal
          </div>
        <div className="w-[100%]">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
            <div
                style={{
                    height: '750px',
                    width: '900px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                }}
            >
                <Viewer fileUrl={pdfUrl} plugins={[defaultLayoutPluginInstance]} />
            </div>
        </Worker>

        </div>
        </div> */}
    </div>
  ))}
  </div>
  );
};

export default Ideaview;

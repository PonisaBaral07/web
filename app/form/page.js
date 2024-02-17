'use client'
import Entform from "@/components/entform";
import Logo from "@/components/logo";
import { useState } from "react";

const EForm = () => {
  const [formData, setFormData] =useState("")

  const onEdit = (e)=>
  {
    const {name, value} = e.target;
    setFormData(prevState=> (
      {
        ...prevState,
        [name] : value
      }
    )
      )
  }
  

  const formHandler = async(e) =>
  {
    e.preventDefault();
    console.log('the form data is',formData);
    try{
      const response = await fetch('/api/form',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      }

      )
    }
    catch(err){
      console.log(err);
    }
  }

  return (
    <form onSubmit={formHandler}>
        <div className="flex justify-center"><Logo/></div>
        <div className="text-center text-gray-400">Your Success is our algorithm</div>
        
        <div className="flex flex-col gap-4 bg-gray-50 w-[75%] md:w-[75%] p-2 m-auto rounded-sm shadow-md mt-2">
      <div className="w-[100%]">
      <div className="font-bold text-green-800 ">Propose Your Idea Here....</div>
        <div className="title flex flex-col gap-2 ">
          <label htmlFor="title" className="font-bold text-lg">
            Title
          </label>
          <textarea
            name="title"
            rows="3"
            value={formData.name}
            onChange={onEdit}
            required
            className="border border-green-800 rounded-md resize-none font-extrabold p-2 focus:outline-none focus:ring focus:ring-green-950"
          />
        </div>
      </div>
      {/* category */}
      <div className="w-[100%]">
        <div className="category flex flex-col gap-2 ">
          <label htmlFor="category" className="font-bold text-lg">
            Category
          </label>
          <input
            type="text"
            name="category"
            rows="3"
            required
            value={formData.name}
            onChange={onEdit}
            className="border border-green-800 rounded-md resize-none  p-2 focus:outline-none focus:ring focus:ring-green-950"
          />
        </div>
      </div>
      {/* no of patner */}
      <div className="w-[100%]">
        <div className="nopatner flex flex-col gap-2 ">
          <label htmlFor="nopatner" className="font-bold text-lg">
            No of patner
          </label>
          <input
            type="number"
            name="nopatner"
            rows="3"
            value={formData.name}
            onChange={onEdit}
            required
            className="border border-green-800 rounded-md resize-none  p-2 focus:outline-none focus:ring focus:ring-green-950"
          />
        </div>
      </div>
      {/* {patner details} */}
      <div className="bg-gray-100 rounded-md shadow-md p-2">
        <div className="font-extrabold text-green-900">Patner Details</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
          <div className="namepatner flex flex-col gap-2 ">
            <label htmlFor="nampatner" className="font-bold text-lg">
              Patner Name
            </label>
            <input
              type="text"
              name="patnername"
              rows="3"
              value={formData.name}
            onChange={onEdit}
              required
              className="border border-green-800 rounded-md resize-none p-2 focus:outline-none focus:ring focus:ring-green-950"
            />
          </div>
          <div className="nopatner flex flex-col gap-2 col-span-2">
            <label htmlFor="nopatner" className="font-bold text-lg">
              Patner Email
            </label>
            <input
              type="text"
              name="patneremail"
              rows="3"
              value={formData.name}
            onChange={onEdit}
              required
              className="border border-green-800 rounded-md resize-none  p-2 focus:outline-none focus:ring focus:ring-green-950"
            />
          </div>
          <div className="namepatner flex flex-col gap-2 ">
            <label htmlFor="nampatner" className="font-bold text-lg">
              Patner Qualification
            </label>
            <input
              type="text"
              name="patnerqual"
              rows="3"
              value={formData.name}
            onChange={onEdit}
              required
              className="border border-green-800 rounded-md resize-none p-2 focus:outline-none focus:ring focus:ring-green-950"
            />
          </div>
          <div className="nopatner flex flex-col gap-2 col-span-2">
            <label htmlFor="nopatner" className="font-bold text-lg">
              Patner Phone
            </label>
            <input
              type="text"
              name="patnerphone"
              rows="3"
              value={formData.name}
            onChange={onEdit}
              required
              className="border border-green-800 rounded-md resize-none  p-2 focus:outline-none focus:ring focus:ring-green-950"
            />
          </div>
        </div>
      </div>
      {/* project Summary */}
      <label htmlFor="projectSummary" className="font-bold text-lg">Project Summary</label>
        <Entform
          name="projectSummary"
          value={formData.projectSummary}
          setValue={value => setFormData(prevState => ({ ...prevState, projectSummary: value }))}
        />
      {/* pricing */}
      <div className="flex flex-col">
        <label htmlFor="price" className="font-bold text-lg">
          Extimated Budget
        </label>
        <div className="flex flex-row">
          <span className="flex items-center bg-grey-lighter rounded rounded-r-none px-3 font-bold text-grey-darker">
            $
          </span>
          <input
            type="number"
            name="price"
            value={formData.name}
            onChange={onEdit}
            className="bg-grey-lighter text-grey-darker py-2  rounded text-grey-darkest border border-grey-lighter rounded-l-none "
          />
        </div>
      </div>
      {/* files */}

      <div className="p-2 ">
        <label className="font-bold text-lg" htmlFor="file_input">
          Upload file
        </label>
        <input
          className="p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          value={formData.name}
            onChange={onEdit}
          type="file"
        />
      </div>
      {/* {button} */}
      <div className="flex justify-center">
        <button className="bg-green-800 hover:bg-green-900 rounded-md p-2 text-white font-bold">Submit</button>
      </div>
    </div>
    </form>
  );
};

export default EForm;

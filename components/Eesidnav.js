import Logo from "./logo";

const Eesidnav = () => {
  return (
    <div className="bg-gray-50 h-[100vh] fixed w-1/3">
      <div className="flex justify-center">
        <Logo  />
      </div>
      <div className="flex justify-center flex-col items-center shadow-md">
      <img
        className="flex h-20 w-20 rounded-full mt-8 justify-center"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Image Description"
      />
      <div className="font-bold text-lg text-center">Sugam Gelal</div>
      <div className="p-1 border border-green-900 rounded-lg text-sm cursor-pointer hover:font-bold mb-2">Edit</div>
      </div>
      <div className="ml-8 mt-4 ">
        <div className="hover:font-bold cursor-pointer">Statisics</div>
        <div className="hover:font-bold cursor-pointer">Proposed Idea</div>
        <div className="hover:font-bold cursor-pointer">Investors</div>
        <div className="hover:font-bold cursor-pointer">Add Idea</div>
       <div className="flex justify-center  items-end h-[26rem]"> <div className="bg-green-800 rounded-md text-white p-2 block m-auto hover:bg-green-900 absolute">Logout</div></div>
      </div>
    </div>
  );
};

export default Eesidnav;

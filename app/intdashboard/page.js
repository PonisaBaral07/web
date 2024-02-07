import Footer from "@/components/footer";
import Logo from "@/components/logo";

const Intdashboard = () => {
  return (
    <div>
      {/* logo */}
      <div className="ml-4 mt-2">
        <Logo />
      </div>
      <div className="flex justify-center mb-8">
        <div className="text-3xl font-semibold text-green-800">
          Investor <span className="text-black">Dashboard</span>
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
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Image Description"
            />
            <div className="font-bold text-lg text-center">Sugam Gelal</div>
            <div className="p-1 border border-green-900 rounded-lg text-sm cursor-pointer hover:font-bold mb-2">
              Edit
            </div>
          </div>
          {/* other profile details */}
          <div className="font-bold">Email : <span className="font-normal">sugamgelal@gmail.com</span></div>
          <div className="font-bold">Phone : <span className="font-normal">+977 9815397684</span></div>
          <div className="font-bold">Job : <span className="font-normal">CEO</span></div>
          <div className="font-bold">Company : <span className="font-normal">Investor hub</span></div>
          
        </div>
        {/* main section of the dashbaord  */}
        <div className="flex flex-col bg-white w-2/3 rounded-md h-[60vh] p-4">
            {/* button part */}
          <div className="flex gap-8 mb-8">
            <div className="bg-green-600 w-[150px] text-white font-bold p-2 rounded-md text-center">info</div>
            <div className="bg-green-600 w-[150px] text-white font-bold p-2 rounded-md text-center">Invested Idea</div>
            <div className="bg-green-600 w-[150px] text-white font-bold p-2 rounded-md text-center">Idea Liked</div>
          </div>
          {/* content part */}
          <div className="">
            <div className="bg-gray-100 p-4 rounded-md flex justify-center items-center h-[45vh]">
            <div className="grid grid-cols-3 gap-3 mb-2">
      <dl className="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
        <dt className="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">12</dt>
        <dd className="text-orange-600 dark:text-orange-300 text-sm font-medium text-center">No of Idea uploaded</dd>
      </dl>
      <dl className="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
        <dt className="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">23</dt>
        <dd className="text-teal-600 dark:text-teal-300 text-sm font-medium text-center">No of idea Viewed</dd>
      </dl>
      <dl className="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
        <dt className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">64</dt>
        <dd className="text-blue-600 dark:text-blue-300 text-sm font-medium text-center">Total Number of Ivestor interacted</dd>
      </dl>
    </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Intdashboard;

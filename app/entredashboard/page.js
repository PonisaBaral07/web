
import { GetUserId } from "@/components/cookie";
import EntdashboardContent from "@/components/entdashboardcontent";
import Footer from "@/components/footer";
import Logo from "@/components/logo";

const Entdashboard = () => {
  const userId = GetUserId();
  

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
              Hello
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

            {/* <button
              onClick={signOut}
              className="bg-green-800 p-2 rounded-md text-white font-bold"
            >
              signout
            </button> */}
          </div>
          {/* main section of the dashbaord  */}
          <div className="flex flex-col bg-white w-2/3 rounded-md h-[60vh] p-4">
            <EntdashboardContent/>
          </div>
        </div>

        <Footer />
      </div>
    );
};

export default Entdashboard;

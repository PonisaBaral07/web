
import { GetUserId } from "@/components/cookie";
import EntdashboardContent from "@/components/entdashboardcontent";
import Footer from "@/components/footer";
import Logo from "@/components/logo";
import Signout from "../../components/logout";

const Entdashboard = async () => {
  const userId = GetUserId();
  console.log(`the user is is ${userId}`);
  
    const response = await fetch(`http://localhost:3000/api/${userId}`);
    console.log(response);
    const json = await response.json();
    const responseIdeas = await fetch(`http://localhost:3000/api/ideas/${userId}`);
    const responseIdea = await responseIdeas.json();

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
                src="/Sample_User_Icon.png"
                alt="Image Description"
              />
              <div className="font-bold text-lg text-center">
              {json.foundUser.fname}{" "} {json.foundUser.lname}
              </div>
              
            </div>
            {/* other profile details */}
            <div className="font-bold">
              Email :{" "}
              <span className="font-normal">{json.foundUser.email}</span>
            </div>
            <div className="font-bold">
              Qualification : <span className="font-normal">{json.foundUser.qualification}</span>
            </div>
            <div className="font-bold">
              University : <span className="font-normal">{json.foundUser.university}</span>
            </div>
            {/* <div className="font-bold">Job : <span className="font-normal">CEO</span></div> */}
            {/* <div className="font-bold">Company : <span className="font-normal">Investor hub</span></div> */}

            {/* <button
              onClick={signOut}
              className="bg-green-800 p-2 rounded-md text-white font-bold"
            >
              signout
            </button> */}
            <Signout/>
          </div>
          {/* main section of the dashbaord  */}
          <div className="flex flex-col bg-white w-2/3 rounded-md h-[60vh] p-4">
            <EntdashboardContent userId={userId} ideaDetails ={responseIdea}/>
          </div>
        </div>

        <Footer />
      </div>
    );
};

export default Entdashboard;

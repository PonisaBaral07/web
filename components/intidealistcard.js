import Link from "next/link";


const INTCard = ({ idea }) => {

  return (
    <div  >
        <Link href={{
          pathname:  `/${idea._id}`,
  
      }}>
          <div className="lg:w-[750px] lg:flex p-1">
            {/* image  */}
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: 'url("five.jpg")' }}
              title="Woman holding a mug"
            ></div>

            <div className="border-r  w-[100%] border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8 ">
              <p className="text-gray-600">{idea.category}</p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {idea.title}
                </div>

                <p className="text-gray-700 text-base">{idea.projectsummary.slice(0, 395)}........</p>
              </div>
              <div className="flex items-center">
                {/* <img
                  className="w-10 h-10 rounded-full mr-4"
                  src="/five.jpg"
                  alt="Avatar of Jonathan Reinink"
                /> */}
                <div className="text-sm">
                  {/* <p className="text-gray-900 leading-none">{userDetails.fname}</p> */}
                  <p className="text-gray-600">{idea.createdAt.split('T')[0]}</p>
                  <p className="text-gray-600">{idea.user.fname} {idea.user.lname}</p>
                </div>
              </div>
            </div>
          </div>
      </Link>
    </div>
  );
};

export default INTCard;

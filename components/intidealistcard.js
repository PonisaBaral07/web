import Link from "next/link";

const INTCard = ({ idea }) => {
  return (
    <div>
      <Link
        href={{
          pathname: `/${idea._id}`,
        }}
      >
        <div className="lg:w-[750px] lg:flex p-1 flex">
          <div className="border  w-[100%] border-b border-l  border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8 ">
              <p className="text-gray-600">{idea.category}</p>
              <div className="text-gray-900 font-bold text-xl mb-2">
                {idea.title}
              </div>

              <p className="text-gray-700 text-base">
                {idea.projectsummary.slice(0, 395)}........
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                {/* <p className="text-gray-900 leading-none">{userDetails.fname}</p> */}
                <p className="text-gray-600">{idea.createdAt.split("T")[0]}</p>
                <p className="text-gray-600">
                  {idea.user.fname} {idea.user.lname}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default INTCard;

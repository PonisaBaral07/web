import Logo from "@/components/logo";

const Signup = () => {
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 h-2 ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Logo/>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Interest Form
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
              <div>
                  <label
                    htmlFor="preference"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Specify your preference 
                  </label>
                  <input
                    type="text"
                    name="preference"
                    id="preference"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="IT projects "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="expected investment budget"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Expected investment budget
                  </label>
                  <input
                    type="text"
                    name="expected investment budget"
                    id="expected investment budget"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="$1,000-$10,000"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="past experience"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Past experience
                  </label>
                  <input
                    type="past experience"
                    name="past experience"
                    id="past experience"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Startup"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="geographical location"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Geographical Location
                  </label>
                  <input
                    type="text"
                    name="geographical location"
                    id="geographical location"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Nepal "
                    required
                  />
                </div>

                                
            <button
            className="w-full mt-4 bg-green-800 text-white rounded p-2"
            type="button"
            >
           Submit
           </button>
                
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;

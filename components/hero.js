

const Hero = () => {
  return (
   <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Unlock the Power of Collaboration
        <br className="hidden lg:inline-block" />
      </h1>
      <p className="mb-8 leading-relaxed">Discover groundbreaking ideas. Welcome to InvestorHub – your gateway to innovation and investment. We're on a mission to connect visionary entrepreneurs with forward-thinking investors, fueling the growth of groundbreaking ideas. Discover, invest, and collaborate with like-minded innovators in our vibrant community. Whether you're an entrepreneur seeking support or an investor looking for the next big opportunity, InvestorHub is your platform for success. Join us today and be part of shaping the future of innovation and entrepreneurship.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-green-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-900 rounded text-lg">Get Started</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="C:\Users\sampa\OneDrive\Desktop\investorhub\investo\app\asset\five.jpg" />
    </div>
  </div>
</section>

  )
}

export default Hero
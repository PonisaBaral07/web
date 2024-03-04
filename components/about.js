
const About = () => {
  return (
    <section className="text-gray-600 body-font" id= "about">
        <h1 className="title-font test text-center sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            About us
          </h1>
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
      {/* <div className="container mx-auto custom-container flex px-5 py-24 md:flex-row flex-col items-center"> */}
  
      
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <picture>
          <img
            className="object-cover object-center rounded"
            alt="about"
            src="/four.jpg"
          />
          </picture>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          
          <p className="mb-8 leading-relaxed">
          At InvestorHub, we're passionate about fostering innovation and driving growth. Our platform serves as a dynamic nexus, connecting ambitious entrepreneurs with savvy investors, facilitating the exchange of ideas and capital that propels innovation forward. With a commitment to empowering startups and enabling strategic partnerships, InvestorHub is dedicated to shaping a future where groundbreaking ideas thrive. Join us in our mission to fuel innovation and create lasting impact.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="flex flex-col mx-auto w-[80%] md:mx-0 md:text-start  text-center md:pl-28">
        <h2 className="text-[#e3af5a] uppercase font-barlow">
          Find your dream home
        </h2>
        <h1 className="text-[#fff] mt-5 font-gilda text-6xl">
          Rent affordable houses
        </h1>
        <p className="text-2xl text-[#fff]  font-gilda md:w-[60%] mt-5">
          The houses listed on our website are affordable and are located in
          strategic places within your area and at affordable prices
        </p>
        <button className="bg-[#fff] font-barlow uppercase ml-20 md:ml-0 text-[#151623]  px-4 py-4 mt-10 w-44 rounded-md">
          Explore houses
        </button>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import two from "/two.png";
import couch from "/couch.jpg";

const About = () => {
  return (
    <div className="bg-[#151623]">
      <div className="">
        <h2 className="text-[#e3af5a] text-center uppercase font-barlow text-md md:text-lg">
          Discover
        </h2>
        <h1 className="font-gilda text-center mt-5 text-4xl mx-auto w-[65%] md:w-[40%] md:text-5xl text-[#ffffff]">
          The World Of Real Estate
        </h1>
        <img src={two} alt="two" className=" mx-auto mt-8 h-20 w-20" />
        <p className="text-center text-[#fff] mx-auto md:w-[35%] w-[88%] mt-8 font-gilda text-xl md:text-2xl">
          We work with several agents and landlords to provide you with the best
          houses at affordable prices and in strategic locations
        </p>
      </div>

      <div>
        <div className="flex mx-auto md:w-[80%] gap-10 mt-10 w-[90%] flex-col m md:flex-row ">
          <div>
            <div className="border-b border-[#d5a457]">
              <img src={couch} alt="couch" className=" h-[400px]" />
            </div>
            <h2 className="text-[#fff] text-center font-gilda capitalize text-2xl py-5">
              Easy viewing of houses
            </h2>
            <p className="text-[#9c9ca7] font-barlow text-center mx-auto w-[95%]">
              You can schedule a viewing of any house you like at your
              convenient time to prevent any inconveniences
            </p>
          </div>
          <div>
            <div className="border-b border-[#d5a457]">
              <img src={couch} alt="couch" className=" h-[400px]" />
            </div>
            <h2 className="text-[#fff] text-center font-gilda capitalize text-2xl py-5">
              Easy viewing of houses
            </h2>
            <p className="text-[#9c9ca7] font-barlow text-center mx-auto w-[95%]">
              You can schedule a viewing of any house you like at your
              convenient time to prevent any inconveniences
            </p>
          </div>
          <div>
            <div className="border-b border-[#d5a457]">
              <img src={couch} alt="couch" className=" h-[400px]" />
            </div>
            <h2 className="text-[#fff] text-center font-gilda capitalize text-2xl py-5">
              Easy viewing of houses
            </h2>
            <p className="text-[#9c9ca7] font-barlow text-center mx-auto w-[95%]">
              You can schedule a viewing of any house you like at your
              convenient time to prevent any inconveniences
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

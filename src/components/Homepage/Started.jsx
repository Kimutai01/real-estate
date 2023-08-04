import React from "react";
import two from "/two.png";
const Started = () => {
  return (
    <div className="bg-[#151623] pt-10 pb-20 ">
      <div className=" bg-[#222] mx-auto w-[90%] mt-10 flex flex-col items-center pb-10 border-b border-[#d5a457] justify-center">
        <img src={two} alt="two" className=" mx-auto mt-8 h-20 w-20" />
        <h2 className="text-[#fff] mt-5 font-gilda text-4xl">
          Your Satisfaction Is Paramount
        </h2>
        <p className="w-[50%] font-barlow text-[#fff] mt-10 text-lg text-center">
          With an unwavering commitment to excellence, our team of experienced
          professionals is ready to provide personalized assistance and guidance
          throughout your real estate journey
        </p>
        <button className="hover:bg-[#fff] font-barlow uppercase ml-20 md:ml-0 text-[#151623]  px-4 py-4 mt-10 w-44 rounded-md bg-[#e3af5a]">
          Explore houses
        </button>
      </div>
    </div>
  );
};

export default Started;

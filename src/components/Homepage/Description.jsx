import React from "react";
import arc from "/arc.png";
import hou from "/hou.jpg";

const Description = () => {
  return (
    <div className="bg-[#151623] pt-20">
      <div>
        <img src={arc} alt="arc" className="mx-auto h-16 w-16" />
      </div>

      <div className="pt-10 mx-auto flex flex-col gap-10 md:w-[80%] w-[80%]">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-[100%]">
            <img src={hou} alt="hou" className="w-full" />
          </div>
          <div>
            <p className="text-[#e3af5a] uppercase font-barlow text-center md:text-start">
              BEAUTIFUL PROPERTY
            </p>
            <h2 className="text-[#fff] mt-5 font-gilda text-4xl text-center md:text-start">
              Houses all over the country
            </h2>
            <p className="text-xl text-[#fff]  font-gilda text-center md:text-start  mt-5">
              Get the ultimate experience of renting a house with us. We have
              houses all over the country and you can rent them at affordable
              prices
            </p>
            <button className="bg-[#fff] font-barlow uppercase ml-20 md:ml-0 text-[#151623]  px-4 py-4 mt-10 w-44 rounded-md hover:bg-[#e3af5a]">
              Explore houses
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse gap-10">
          <div className="w-[100%]">
            <img src={hou} alt="hou" className="w-full" />
          </div>
          <div>
            <p className="text-[#e3af5a] uppercase font-barlow text-center md:text-start">
              BEAUTIFUL PROPERTY
            </p>
            <h2 className="text-[#fff] mt-5 font-gilda text-4xl text-center md:text-start">
              Houses all over the country
            </h2>
            <p className="text-xl text-[#fff]  font-gilda text-center md:text-start  mt-5">
              Get the ultimate experience of renting a house with us. We have
              houses all over the country and you can rent them at affordable
              prices
            </p>
            <button className="bg-[#fff] font-barlow uppercase ml-20 md:ml-0 text-[#151623]  px-4 py-4 mt-10 w-44 rounded-md hover:bg-[#e3af5a]">
              Explore houses
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-[100%]">
            <img src={hou} alt="hou" className="w-full" />
          </div>
          <div>
            <p className="text-[#e3af5a] uppercase font-barlow text-center md:text-start">
              BEAUTIFUL PROPERTY
            </p>
            <h2 className="text-[#fff] mt-5 font-gilda text-4xl text-center md:text-start">
              Houses all over the country
            </h2>
            <p className="text-xl text-[#fff]  font-gilda text-center md:text-start  mt-5">
              Get the ultimate experience of renting a house with us. We have
              houses all over the country and you can rent them at affordable
              prices
            </p>
            <button className="bg-[#fff] font-barlow uppercase ml-20 md:ml-0 text-[#151623]  px-4 py-4 mt-10 w-44 rounded-md hover:bg-[#e3af5a]">
              Explore houses
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

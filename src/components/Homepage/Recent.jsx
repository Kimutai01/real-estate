import React from "react";
import arc from "/arc.png";
import bed from "/bed.jpg";
import { GrLocation } from "react-icons/gr";
import { CiLocationOn } from "react-icons/ci";
const Recent = () => {
  return (
    <div className="bg-[#151623] pt-20">
      <div className=" ">
        <img src={arc} alt="arc" className="mx-auto h-16 w-16" />
      </div>

      <div className="mx-auto w-[80%] pt-10 flex flex-col md:flex-row  gap-10">
        <div>
          <img src={bed} alt="bed" className="w-full" />
          <div>
            <h2 className="text-[#e3af5a] text-center uppercase font-barlow text-md md:text-lg mt-5">
              Lamac apartments
            </h2>
            <div className="flex justify-between">
              <div className="flex font-gilda text-[#fff] items-center">
                <CiLocationOn color="#fff" size={25} />
                <p className="text-xl">Juja</p>
              </div>
              <div>
                <p className="font-gilda text-[#fff]">12 vacancies</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={bed} alt="bed" className="w-full" />
          <div>
            <h2 className="text-[#e3af5a] text-center uppercase font-barlow text-md md:text-lg mt-5">
              Lamac apartments
            </h2>
            <div className="flex justify-between">
              <div className="flex font-gilda text-[#fff] items-center">
                <CiLocationOn color="#fff" size={25} />
                <p className="text-xl">Juja</p>
              </div>
              <div>
                <p className="font-gilda text-[#fff]">12 vacancies</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={bed} alt="bed" className="w-full" />
          <div>
            <h2 className="text-[#e3af5a] text-center uppercase font-barlow text-md md:text-lg mt-5">
              Lamac apartments
            </h2>
            <div className="flex justify-between">
              <div className="flex font-gilda text-[#fff] items-center">
                <CiLocationOn color="#fff" size={25} />
                <p className="text-xl">Juja</p>
              </div>
              <div>
                <p className="font-gilda text-[#fff]">12 vacancies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;

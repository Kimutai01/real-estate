import React from "react";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import {
  BsFillArrowUpSquareFill,
  BsPersonLinesFill,
  BsTwitter,
} from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 bg-[#222] text-[#adadb0] pl-12 md:pl-20 pt-10 md:pt-20">
        <div>
          <h1 className="text-[#eee] font-bold text-4xl font-allura">
            Muru properties
          </h1>
          <div className="mt-5">
            <div className="flex ">
              <Link href="https://www.linkedin.com/in/kimutai01">
                <div className="rounded-full pr-4 text-[#0e76a8] cursor-pointer hover:scale-105 ease-in duration-100">
                  <AiFillLinkedin size={25} />
                </div>
              </Link>

              <Link href="https://twitter.com/Kimutai_01?t=GL3TSvd8lOxss04vpq1Khw&s=09">
                <div className="rounded-full pr-4 cursor-pointer text-[#1DA1F2] hover:scale-105 ease-in duration-100">
                  <BsTwitter size={25} />
                </div>
              </Link>

              <Link href="mailto:kiprotichkimutai01@gmail.com">
                <div className="rounded-full pr-4 cursor-pointer text-white hover:scale-105 ease-in duration-100">
                  <MdEmail size={25} />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex md:justify-around">
          <div className="mr-20 md:mr-0">
            <ul>
              <Link href="/">
                <li className="mb-5 hover:text-[#75fbfd] cursor-pointer font-gilda">
                  Home
                </li>
              </Link>
              <Link href="#about">
                <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">
                  About
                </li>
              </Link>
              <Link href="#skills">
                <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">
                  Skills
                </li>
              </Link>
              <Link href="#projects">
                <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">
                  Projects
                </li>
              </Link>
            </ul>
          </div>

          <div>
            <ul>
              <Link href="#contact">
                <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">
                  Contact
                </li>
              </Link>

              <Link href="#medium">
                <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">
                  Medium
                </li>
              </Link>
              <Link href="#mentorship">
                <li className="mb-5 hover:text-[#75fbfd] cursor-pointer">
                  Mentorship
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="bg-[#222] text-[#adadb0] pb-20 pr-4 md:pr-0 font-gilda">
          ©{new Date().getFullYear()} Muru Properties. All rights reserved
        </div>
      </div>
      {/* Button to scroll to the top*/}
      <Link href="/">
        <div className="fixed bottom-5 right-5 animate-bounce">
          <button className=" text-[#5651e5] rounded-full p-3 hover:bg-[#75fbfd] hover:text-[#181823] ease-in duration-100">
            <BsFillArrowUpSquareFill size={25} />
          </button>
        </div>
      </Link>
    </>
  );
};

export default Footer;

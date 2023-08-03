import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { GrMenu } from "react-icons/gr";

import { Link } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";

import { BsChevronDown } from "react-icons/bs";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  useEffect(() => {
    setNavBg("#000");
    setLinkColor("#ecf0f3");
  }, []);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const [showServicesDetails, setShowServicesDetails] = useState(false);
  const [showStoreDetails, setShowStoreDetails] = useState(false);

  const handleServicesClick = () => {
    setShowServicesDetails(!showServicesDetails);
  };
  const handleStoreClick = () => {
    setShowStoreDetails(!showStoreDetails);
  };

  return (
    <div
      style={{ backgroundColor: `transparent` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] md:px-24"
          : "fixed w-full h-20 z-[100] md:px-24"
      }
    >
      <div className="flex justify-between items-center w-full h-full md:px-4 py-4 px-2 2xl:px-16 rounded">
        <div className="">
          <Link className="text-[#eee] font-bold text-3xl font-allura" to="/">
            Muru properties
          </Link>
        </div>
        <div>
          <ul
            className="hidden md:flex font-barlow"
            style={{ color: `${linkColor}` }}
          >
            <Link to="/">
              <li className="ml-10 font-medium text-[#eee] uppercase  text-sm hover:text-[#cda873] hover:scale-105 transition-colors duration-300">
                Home
              </li>
            </Link>
            <Link to="/">
              <li className="ml-10 font-medium text-[#eee] uppercase  text-sm  hover:text-[#cda873] hover:scale-105 transition-all duration-all hover:border-y-black ">
                About Us
              </li>
            </Link>

            <Link to="/">
              <li className="ml-10 font-medium text-[#eee] uppercase  text-sm  hover:text-[#cda873] hover:scale-105 transition-all duration-all hover:border-y-black ">
                About Us
              </li>
            </Link>

            <Link to="/about">
              <li className="ml-10 font-medium text-[#eee] uppercase  text-sm hover:text-[#cda873] hover:scale-105 transition-all duration-all hover:border-y-black ">
                Tenant
              </li>
            </Link>
            <Link to="/about">
              <li className="ml-10 font-medium text-[#eee] uppercase  text-sm hover:text-[#cda873] hover:scale-105 transition-all duration-all hover:border-y-black ">
                Agents
              </li>
            </Link>

            <Link to="/contact">
              <li className="ml-10 font-medium text-[#eee] uppercase  text-sm hover:text-[#cda873] hover:scale-105 transition-all duration-all hover:border-y-black ">
                Contact us
              </li>
            </Link>
          </ul>
          <div
            className="md:hidden flex justify-between items-center w-full h-full"
            onClick={handleNav}
            style={{ color: `${linkColor}` }}
          >
            <AiOutlineMenu size={40} color="#fff" className="text-[#fff]" />
          </div>
        </div>
        <div className="hidden md:block">
          <div>
            <Link to="/contact">
              <button className="uppercase text-[#000] font-light font-barlow bg-[#fff] px-4 py-2 hover:bg-[#cda873]   transition-all duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hiddden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[100%] sm:w-[60%] md:w-[45%]  h-screen bg-[#000]/60 text-white p-2 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center w-full mt-3 px-3">
              <Link
                className="text-[#eee] font-bold text-3xl font-allura"
                to="/"
              >
                Muru properties
              </Link>
              <div
                onClick={handleNav}
                className="cursor-pointer text-[#fff] text-3xl"
              >
                <AiOutlineClose size={35} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col  items-center font-barlow  py-4">
              <ul>
                <Link to="/" onClick={handleNav}>
                  <li className="ml-3 mt-10 text-xl uppercase">Home</li>
                </Link>
                <Link to="/store" onClick={handleNav}>
                  <li className="ml-3 mt-10 text-xl uppercase"> About</li>
                </Link>
                <Link to="/about" onClick={handleNav}>
                  <li className="py-4 mt-10 text-xl ml-3 cursor-pointer uppercase">
                    Listing
                  </li>
                </Link>
                <Link to="/about" onClick={handleNav}>
                  <li className="py-4 mt-10 text-xl ml-3 cursor-pointer uppercase">
                    Agent
                  </li>
                </Link>
                <Link to="/about" onClick={handleNav}>
                  <li className="py-4 mt-10 text-xl ml-3 cursor-pointer uppercase">
                    Tenant
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

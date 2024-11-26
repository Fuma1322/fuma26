import React from "react";
import { Menu } from "./Dock";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#204E51]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[10px] hidden md:block text-[#204E51]">
            Fuma
          </span>
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#204E51] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:-translate-y-1 transition duration-400">
              About
            </a>
            <a href="#skills" className="cursor-pointer hover:-translate-y-1 transition duration-400">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:-translate-y-1 transition duration-400">
              Projects
            </a>
          </div>
        </div>
        <div className="justify-center items-center hidden lg:block">
            <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
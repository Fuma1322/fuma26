import React from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";

const Footer = () => {
  return (
    <div className="w-full h-full text-gray-200 shadow-lg shadow-[#204E51]/50 bg-[#03001417] backdrop-blur-md z-50 p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="peer transition-all duration-300 font-bold text-gray-400 hover:font-black hover:text-indigo-100 py-3">Social Media</div>
                    <div className="flex gap-5 py-2">
                        <div className="social-icon">
                        <Github className="w-6 h-6 text-white hover:text-gray-500" />
                        </div>
                        <div className="social-icon">
                        <IconBrandX className="w-6 h-6 text-white hover:text-gray-600" />
                        </div>
                        <div className="social-icon">
                        <Facebook className="w-6 h-6 text-white hover:text-blue-600" />
                        </div>
                        <div className="social-icon">
                        <Instagram className="w-6 h-6 text-white hover:text-pink-600" />
                        </div>
                        <div className="social-icon">
                        <Linkedin className="w-6 h-6 text-white hover:text-blue-600" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-[10px] text-[15px] text-center">
                &copy; Tankiso Fuma {new Date().getFullYear()}. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer
import React from "react";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { IconBrandX } from "@tabler/icons-react";
import Link from "next/link";

const Footer = () => {
    return (
      <footer className="w-full text-gray-200 shadow-lg shadow-[#204E51]/50 bg-[#03001417] backdrop-blur-md relative z-10 p-5">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full flex flex-row items-center justify-around flex-wrap">
            <div className="min-w-[200px] flex flex-col items-center">
              <div className="peer transition-all duration-300 font-bold text-gray-400 hover:font-black hover:text-indigo-100 py-3">
                Social Media
              </div>
              <div className="flex gap-5 py-2">
                <Link href="https://github.com/Fuma1322" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6 text-white hover:text-gray-500" />
                </Link>
                <Link href="https://x.com/FumaTankiso" target="_blank" rel="noopener noreferrer">
                  <IconBrandX className="w-6 h-6 text-white hover:text-gray-600" />
                </Link>
                <Link href="https://www.facebook.com/profile.php?id=100008058046488" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-6 h-6 text-white hover:text-blue-600" />
                </Link>
                <Link href="https://www.instagram.com/tequila.stash/" target="_blank" rel="noopener noreferrer">
                  <Instagram className="w-6 h-6 text-white hover:text-pink-600" />
                </Link>
                <Link href="https://www.linkedin.com/in/tankiso-leonard-fuma-2b16352a5/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6 text-white hover:text-blue-600" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5 text-[15px] text-center">
            &copy; Tankiso Fuma {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
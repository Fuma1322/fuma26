"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { Orbiting } from "../main/Orbit";
import { Typewriter } from "../main/Type";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      {/* Typewriter */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start order-1 md:order-none">
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <Typewriter />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-sm md:text-lg text-gray-400 my-3 md:my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website
          and Software development. Welcome to my portfolio website.
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-6 lg:flex-col"
      >
        <Orbiting />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
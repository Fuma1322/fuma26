"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SkillText from "../sub/SkillsText";
  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-40 py-8"
        style={{ transform: "scale(0.9" }}
      >
        <SkillText />
        <div className="mt-12 flex justify-center">
          <ul className="inline-grid grid-cols-3 gap-x-10 gap-y-6 md:gap-x-16 md:grid-cols-3 lg:grid-cols-5">
            {/* LOGO 1 HTML*/}
            <li>
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image
                  src="/html.png"
                  alt="THE GOVERNMENT OF LESOTHO"
                  width={70}
                  height={70}
                />
              </motion.div>
            </li>

            {/* LOGO 2  CSS*/}
            <li>
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image
                  src="/css.png"
                  alt="THE GOVERNMENT OF LESOTHO"
                  width={70}
                  height={70}
                />
              </motion.div>
            </li>

            {/* LOGO 3 NEXT.JS*/}
            <li>
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image
                  src="/next.png"
                  alt="THE GOVERNMENT OF LESOTHO"
                  width={70}
                  height={70}
                />
              </motion.div>
            </li>
            
            {/* LOGO 4 MONGODB*/}
            <li>
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image src="/mongodb.png" alt="SEBABATSO" width={70} height={70} />
              </motion.div>
            </li>
            
            {/* LOGO 5 NODE.JS*/}
            <li>
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image src="/node-js.png" alt="UN" width={70} height={70} />
              </motion.div>
            </li>

            {/* LOGO 6 TYPESCRIPT*/}
            <li>
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image src="/ts.png" alt="200 years logo" width={70} height={70} />
              </motion.div>
            </li>

            {/* LOGO 7 PRISMA*/}
            <li>
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image src="/prisma.webp" alt="200 years logo" width={70} height={70} />
              </motion.div>
            </li>

            {/* LOGO 8 VERCEL*/}
            <li className="hidden lg:block">
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image src="/vercel.svg" alt="200 years logo" width={70} height={70} />
              </motion.div>
            </li>

            {/* LOGO 9 REACT*/}
            <li>
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image src="/react.png" alt="200 years logo" width={70} height={70} />
              </motion.div>
            </li>

            {/* LOGO 10 TAILWIND CSS*/}
            <li>
              <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <Image src="/tailwind.png" alt="200 years logo" width={70} height={70} />
              </motion.div>
            </li>
          </ul>
          </div>
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cards-video.webm"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
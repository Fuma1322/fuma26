"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { slideInFromLeft } from "@/utils/motion";

export const DragCards = () => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden bg-transparent">
      <h2 className="relative z-0 text-[20vw] font-black text-neutral-800 md:text-[200px] mt-36">
        Welcome<span className="text-[#204E51]">.</span>
      </h2>
      <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xl font-bold md:text-lg text-gray-400 my-3 md:my-5 max-w-[600px] py-4 p-4"
        >
          Hello, My name is Tankiso Fuma. I&apos;m a Full Stack Software Engineer with experience in Website
          and Software development.
        </motion.p>
      <Cards />
    </section>
  );
};

const Cards = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="h1.avif"
        alt="Example image"
        rotate="6deg"
        top="20%"
        left="25%"
        className="w-36 md:w-56"
      />
      <Card
        containerRef={containerRef}
        src="h2.avif"
        alt="Example image"
        rotate="12deg"
        top="25%"
        left="65%"
        className="w-24 md:w-48"
      />
      <Card
        containerRef={containerRef}
        src="h6.png"
        alt="Example image"
        rotate="-6deg"
        top="18%"
        left="42%"
        className="w-52 md:w-80"
      />
      <Card
        containerRef={containerRef}
        src="h4.avif"
        alt="Example image"
        rotate="8deg"
        top="47%"
        left="40%"
        className="w-48 md:w-72"
      />
      <Card
        containerRef={containerRef}
        src="h5.avif"
        alt="Example image"
        rotate="-3deg"
        top="40%"
        left="55%"
        className="w-24 md:w-48"
      />
    </div>
  );
};

interface CardProps {
  containerRef: React.RefObject<HTMLDivElement>;
  src: string;
  alt: string;
  top: string;
  left: string;
  rotate: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  containerRef,
  src,
  alt,
  top,
  left,
  rotate,
  className,
}) => {
  const [zIndex, setZIndex] = useState(0);

  const updateZIndex = () => {
    const els = document.querySelectorAll(".drag-elements");

    let maxZIndex = -Infinity;

    els.forEach((el) => {
      const zIndex = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );

      if (!isNaN(zIndex) && zIndex > maxZIndex) {
        maxZIndex = zIndex;
      }
    });

    setZIndex(maxZIndex + 1);
  };

  return (
    <motion.img
      onMouseDown={updateZIndex}
      style={{
        top,
        left,
        rotate,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute w-48 bg-neutral-200 p-1 pb-4",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.65}
    />
  );
};

"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function Typewriter() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "ME!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem] ">
      <TypewriterEffect words={words} />
    </div>
  );
}

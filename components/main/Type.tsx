"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";

export function Typewriter() {
  const words = [
    {
      text: "Join",
    },
    {
      text: "Me",
    },
    {
      text: "And",
    },
    {
      text: "Let",
    },
    {
      text: "Us",
    },
    {
      text: "Build",
    },
    {
      text: "Awesome",
    },
    {
      text: "Apps",
    },
    {
      text: "TOGETHER!",
      className: "text-[#204E51]",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem] ">
      <TypewriterEffect words={words} />
    </div>
  );
}

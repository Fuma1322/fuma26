import Image from "next/image";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area"

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#204E51]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <ScrollArea className="h-42 w-full">
          <p className="mt-2 text-gray-300">{description}</p>
        </ScrollArea>
      </div>
      <div className="flex justify-end p-4">
          <button className="cursor-pointer inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Preview
          </button>
      </div>
    </div>
  );
};

export default ProjectCard;

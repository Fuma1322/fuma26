import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ScrollArea } from "@/components/ui/scroll-area"
import { TextHoverEffect } from "../ui/text-hover-effect";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <div className="h-[10rem] flex items-center justify-center">
        <TextHoverEffect text="My Projects" />
      </div>
      <ScrollArea className="h-96 w-full">
        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-3 gap-10 px-10">
        <Link href="https://www.clinicease.tech" className="cursor-pointer">
          <ProjectCard
            src="/ce.png"
            title="ClinicEase"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          </Link>
          <Link href="https://www.mangmosotho.com" className="cursor-pointer">
            <ProjectCard
              src="/mannn.png"
              title="Mang Mosotho"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Link>
          <Link href="https://the-valley.vercel.app" className="cursor-pointer">
            <ProjectCard
              src="/th.png"
              title="The Valley"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Link>
          <Link href="https://www.propertyhive.com.ng" className="cursor-pointer">
            <ProjectCard
              src="/ph.png"
              title="Property Hive"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Link>
          <Link href="https://cryptrack-five.vercel.app" className="cursor-pointer">
          <ProjectCard
            src="/bbn.png"
            title="Cryptrack"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          </Link>
          <Link href="https://agrivista-navy.vercel.app" className="cursor-pointer">
          <ProjectCard
            src="/ff.png"
            title="AgriVista"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          </Link>
          <Link href="https://www.medialabnetwork.com" className="cursor-pointer">
          <ProjectCard
            src="/slaw.png"
            title="Media Lab"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          </Link>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Projects;

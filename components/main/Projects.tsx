import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ScrollArea } from "@/components/ui/scroll-area"
import { TextHoverEffect } from "../ui/text-hover-effect";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="projects"
    >
      <div className="h-[10rem] flex items-center justify-center">
        <TextHoverEffect text="My Projects" />
      </div>
      <ScrollArea className="h-96 w-full ">
        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-3 gap-10 px-10">
          <ProjectCard
            src="/NextWebsite.png"
            title="Mang Mosotho"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="/CardImage.png"
            title="The Valley"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Property Hive"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Property Hive"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          <ProjectCard
            src="/SpaceWebsite.png"
            title="Property Hive"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Projects;

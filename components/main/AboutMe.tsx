"use client";

import TabButton from "./TabButton";
import { ThreeCard } from "../sub/3dCard";
import HyperText from "@/components/ui/hyper-text";
import React, { useTransition, useState } from "react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-3">
        <li>Node.js</li>
        <li>Prisma</li>
        <li>MongoDB</li>
        <li>Next JS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Framer Motion</li>
        <li>Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Holberton School Lesotho</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontend Developer Internpulse</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTabContent = TAB_DATA.find((t) => t.id === tab)?.content || (
    <p>No content available.</p>
  );

  return (
    <section className="text-white pb-[-80]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <ThreeCard />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full py-2">
        <HyperText
          className="text-4xl font-bold text-white py-2"
          text="About Me"
        />
          <p className="text-base lg:text-base">
            I am a Full Stack Web Developer with a strong passion for crafting interactive,
            responsive, and user-centric web applications. My expertise spans a modern tech stack,
            including React, TypeScript, Next.js, Node.js and Tailwind CSS. I thrive in dynamic environments, consistently delivering clean, scalable,
            and maintainable code. <br></br>
            As a quick learner, I am dedicated to expanding my knowledge and skill set to stay ahead
            in the ever-evolving web development landscape. I value collaboration and excel in team 
            settings, where I bring enthusiasm and a problem-solving mindset to build innovative and 
            impactful applications.
          </p>
          <div className="flex flex-row justify-start mt-6">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-2">{activeTabContent}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
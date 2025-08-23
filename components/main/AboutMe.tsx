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
      <ul className="list-disc text-sm pl-2 grid grid-cols-2 gap-2">
        <li>Full Stack Web Development</li>
        <li>Frontend Frameworks: React, Next.js, Tailwind CSS</li>
        <li>Backend Development: Node.js, Django</li>
        <li>Database Management: MongoDB, Prisma</li>
        <li>Programming Languages: C, Python, JavaScript</li>
        <li>UI & Animation: Framer Motion, Responsive Design</li>
        <li>Version Control & Collaboration: Git, GitHub</li>
        <li>API Development & Integration</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li><strong>Holberton School Lesotho</strong> — Foundations in Computer Science (2024)</li>
        <li><strong>FNB App Academy</strong> — Full Stack Development Program (2024)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Foundations in Computer Science — Holberton School (2024)</li>
        <li>Frontend Development — InternPulse (2024)</li>
        <li>Full Stack Development — FNB App Academy (2024)</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "work",
    content: (
      <ul className="list-disc pl-2">
        <li><strong>Senior Software Engineer</strong> — Nucleus Devs (6-month contract, 2024)</li>
        <li><strong>Frontend Developer</strong> — InternPulse (Internship, 2024)</li>
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
            I am a Full Stack Developer with a strong foundation in computer science from 
            <span className="font-semibold"> Holberton School Lesotho</span> and hands-on experience building 
            scalable, user-focused web applications. I have worked as a Senior Software Engineer
            at <span className="font-semibold">Nucleus Devs</span> and as a Frontend Developer at 
            <span className="font-semibold"> InternPulse</span>, where I honed my skills in 
            modern frameworks such as React, Next.js, Node.js, and Django. 
            <br /><br />
            My journey is supported by certifications in 
            <span className="font-semibold"> Foundations in Computer Science, Frontend Development,</span> 
            and <span className="font-semibold">Full Stack Development</span>. 
            I am passionate about building interactive, responsive, and maintainable applications that 
            solve real-world problems. I thrive in collaborative environments and bring a 
            problem-solving mindset, adaptability, and enthusiasm to every project.
          </p>
          <div className="flex flex-wrap justify-start gap-2 mt-6">
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
            <TabButton
              selectTab={() => handleTabChange("work")}
              active={tab === "work"}
            >
              Work Experience
            </TabButton>
          </div>
          <div className="mt-2">
            {activeTabContent}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
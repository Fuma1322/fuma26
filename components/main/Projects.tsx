import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ScrollArea } from "@/components/ui/scroll-area"
import { TextHoverEffect } from "../ui/text-hover-effect";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center "
      id="projects">
      <div className="h-[10rem] flex items-center justify-center">
        <TextHoverEffect text="My Projects" />
      </div>
      <ScrollArea className="h-96 w-full">
        <div className="h-full w-full grid grid-cols-1 lg:grid-cols-3 gap-10 px-10">
        <Link href="https://clinic-ease.vercel.app" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            src="/ce.png"
            title="ClinicEase"
            description="ClinicEase is a comprehensive healthcare management platform that addresses the inefficiencies of traditional clinic operations. Designed to streamline appointment scheduling and enhance patient convenience, ClinicEase eliminates the need for long queues by enabling users to book appointments online. This innovation not only reduces patient waiting times but also optimizes clinic workflows and resource utilization, creating a more efficient and user-friendly healthcare experience for both patients and providers.The project leverages modern technologies to deliver a seamless experience. The front end is built with Next.js and styled with TailwindCSS, ensuring a responsive and visually appealing interface. On the back end, Node.js and MongoDB provide a scalable, high-performance architecture, with Prisma ensuring type-safe database interactions. Features like transactional email notifications powered by Resend enhance communication between clinics and patients. The development process was guided by user-centered design principles, with wireframes created using Balsamiq and task management handled through Trello to ensure collaboration and timely delivery."/>
          </Link>
          <Link href="https://www.propertyhive.com.ng" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <ProjectCard
              src="/ph.png"
              title="Property Hive"
              description="Property Hive is a cutting-edge real estate management platform designed to address the persistent challenges of the property market. By leveraging modern technology, Property Hive simplifies processes, enhances communication, and ensures secure transactions, providing a seamless experience for buyers, sellers, and renters alike."
            />
          </Link>
          <Link href="https://the-valley.vercel.app" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <ProjectCard
              src="/th.png"
              title="The Valley"
              description="The Valley is a comprehensive guesthouse management application designed to streamline the operations of a guesthouse or lodging business. The app provides an intuitive interface for both administrators and guests, ensuring seamless management of rooms, bookings, and customer interactions. Built using modern technologies, it prioritizes efficiency, scalability, and a user-friendly experience."
            />
          </Link>
          <Link href="https://cryptrack-five.vercel.app" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            src="/bbn.png"
            title="Cryptrack"
            description="Cryptrack is a cryptocurrency tracker app built using Next.js, TypeScript, and Tailwind CSS. The app allows users to monitor the prices and trends of various cryptocurrencies in real-time. The app is designed to be user-friendly and mobile-responsive, providing essential information such as the current price, 24-hour price change, market cap, and trading volume for selected cryptocurrencies."
          />
          </Link>
          <Link href="https://www.mangmosotho.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
            <ProjectCard
              src="/mannn.png"
              title="Mang Mosotho"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Link>
          <Link href="https://agrivista-navy.vercel.app" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <ProjectCard
            src="/ff.png"
            title="AgriVista"
            description="A modern and responsive landing page for an agriculture-InterPulse project, built using Next.js and Tailwind CSS. This project showcases various sections such as services, featured products, blog, and testimonials. The design is implemented based on a provided Figma file, ensuring attention to detail and mobile responsiveness."
          />
          </Link>
          <Link href="https://www.medialabnetwork.com" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
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

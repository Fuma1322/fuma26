import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Marqueee from "@/components/main/Maquee"
import { DragCards } from "@/components/main/Drag";
import Contact from "@/components/main/Contact";
import AboutSection from "@/components/main/AboutMe";

export default function Home() {
  return (
      <main className="h-full w-full">
        <div className="flex flex-col gap-10">
          <DragCards />
          <AboutSection />
          <div className="">
          <Skills />
          </div>
          <Projects />
          <Marqueee />
          <Contact />
        </div>
      </main>
  );
}

// fhnx6290

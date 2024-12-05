import Skills from "@/components/main/Skills";
import About from "@/components/main/AboutMe";
import Marqueee from "@/components/main/Maquee";
import Contact from "@/components/main/Contact";
import Projects from "@/components/main/Projects";
import { DragCards } from "@/components/main/Drag";

export default function Home() {
  return (
      <main className="h-full w-full">
        <div className="flex flex-col gap-10">
          <DragCards />
          <About />
          <Skills />
          <Projects />
          <Marqueee />
          <Contact />
        </div>
      </main>
  );
}

// fhnx6290

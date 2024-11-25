import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Marqueee from "@/components/main/Maquee"

export default function Home() {
  return (
      <main className="h-full w-full">
        <div className="flex flex-col gap-10">
          <Hero />
          <Skills />
          <Projects />
          <Marqueee />
        </div>
      </main>
  );
}

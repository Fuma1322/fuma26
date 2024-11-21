import { Github } from "lucide-react";
import OrbitingCircles from "../ui/orbiting-circles";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { SiPrisma } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

export function Orbiting() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <Icons.whatsapp />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Icons.notion />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <Icons.openai />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.gitHub />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  gitHub: () => (
    <Github className="text-white text-7xl font-semibold" />
  ),
  notion: () => (
    <BiLogoTypescript className="text-blue-400 text-6xl font-semibold" />

  ),
  openai: () => (
    <RiNextjsFill className="text-white text-6xl font-semibold" />
  ),
  googleDrive: () => (
    <BiLogoMongodb className="text-green-600 text-6xl font-semibold" />
  ),
  whatsapp: () => (
    <SiPrisma className="text-blue-950 text-6xl font-semibold" />
  ),
};

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

export function Menu() {
  const links = [
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-200" />
      ),
      href: "https://x.com/FumaTankiso",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-200" />
      ),
      href: "https://www.linkedin.com/in/tankiso-leonard-fuma-2b16352a5/",
    },
    {
        title: "GitHub",
        icon: (
          <IconBrandGithub className="h-full w-full text-neutral-200" />
        ),
        href: "https://github.com/Fuma1322",
      },
      {
        title: "Facebook",
        icon: (
          <IconBrandFacebook className="h-full w-full text-neutral-200" />
        ),
        href: "https://www.facebook.com/profile.php?id=100008058046488",
      },
  ];
  return (
    <div className="flex items-center justify-center h-[15rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
}

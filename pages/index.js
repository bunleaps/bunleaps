import React from "react";
import Image from "next/image";

import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/featuredProject";
import SkillsSet from "@/components/sections/SkillsSet";
import YoutubeFeatured from "@/components/sections/youtube";

import Contact from "@/components/pages/contact";

import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <p className="mb-5 lg:mb-0 lg:hidden w-full rounded p-3 bg-red-500 ring-2 ring-red-600">
        This website is not optimized for mobile devices/viewpoints yet.
      </p>
      <Hero />
      <SkillsSet />
      <FeaturedProject />
      {/* <YoutubeFeatured /> */}
      <Contact />
    </div>
  );
}

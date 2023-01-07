import React from "react";
import Link from "next/link";
import { BsFillCompassFill, BsArrowRight } from "react-icons/bs";

const projects = [
  {
    name: "bunleaps.com",
    links: "https://github.com/bunleaps/bunleaps",
    description: "✨ My personal website built with Next.js",
    stack: "Next.js",
  },
  {
    name: "klemQuiz",
    links: "https://github.com/bunleaps/klemQuiz",
    description: "Quiz interface for KlemCambodia",
    stack: "HTML, CSS, & JavaScript",
  },
];

export default function FeaturedProject() {
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-semibold">Featured Projects</h1>
      <div className="flex flex-wrap mt-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="w-full lg:w-2/5 ring-1 ring-zinc-300/70 rounded-lg p-3"
          >
            <h3 className="text-lg font-semibold text-blue-400">
              <Link href={project.links}>{project.name}</Link>
            </h3>
            <p className="mb-5">{project.description}</p>
            <span className="flex items-center">
              <BsFillCompassFill className="mr-2 text-blue-500" />
              {project.stack}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3">
        <Link
          href="/projects"
          className="flex items-center text-blue-400 hover:text-blue-300"
        >
          ✨ See More Projects <BsArrowRight className="ml-2" />
        </Link>
      </p>
    </div>
  );
}

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

export default function YoutubeFeatured() {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-3xl font-semibold">YouTube</h1>
      <div className="flex flex-wrap mt-3 gap-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="w-full lg:w-5/12 bg-zinc-800 hover:bg-zinc-800/60 rounded cursor-pointer"
          >
            <Link href={project.links} legacyBehavior>
              <a target="_blank">
                <div className="w-full rounded-t h-[5px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></div>
                <div className="p-2">
                  <h3 className="text-xl font-semibold text-green-300">
                    {project.name}
                  </h3>
                  <span className="flex items-center ">
                    <BsFillCompassFill className="mr-2 text-blue-500" />
                    {project.stack}
                  </span>
                  <p className="mt-2 text-gray-400">{project.description}</p>
                </div>
              </a>
            </Link>
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

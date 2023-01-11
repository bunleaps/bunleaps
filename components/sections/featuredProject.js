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
  {
    name: "employee_card",
    links: "https://github.com/bunleaps/python-imageplaceholder",
    description:
      "Employee Card Image with Text Placeholder generated with Data using Python",
    stack: "Python",
  },
  {
    name: "Random Hero Generator v2",
    links: "https://github.com/bunleaps/random-hero-v2",
    description:
      "My second version of Random Hero Generator built using an API with a nicer interface and a more readable code.",
    stack: "HTML, CSS, JavaScript & JQuery",
  },
  {
    name: "Covid 19 Tracker: Cambodia",
    links: "https://github.com/bunleaps/covid-19-kh",
    description: "A PWA Covid 19 Tracker that built using an API and JQuery",
    stack: "HTML, CSS, JavaScript & JQuery",
  },
  {
    name: "Intern Application Assignment",
    links: "https://github.com/bunleaps/intern-assignment",
    description:
      "This is a website I have built using Next.js for an assignment from my internship company",
    stack: "Next.js & Styled Components",
  },
];

export default function FeaturedProject() {
  return (
    <div className="mt-10" id="projects">
      <h1 className="text-3xl font-semibold">Featured Projects</h1>
      <div className="flex flex-wrap mt-3 gap-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="w-full lg:w-[49%] bg-zinc-800 hover:bg-zinc-800/60 rounded cursor-pointer"
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
          href="https://github.com/bunleaps?tab=repositories"
          legacyBehavior
        >
          <a
            target="_blank"
            className="flex items-center text-blue-400 hover:text-blue-300"
          >
            ✨ See More Projects <BsArrowRight className="ml-2" />
          </a>
        </Link>
      </p>
    </div>
  );
}

import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Vue.js",
  "MongoDB",
  "Wordpress",
  "Python",
  "Photoshop",
  "Illustrator",
  "Indesign",
  "Premiere Pro",
  "Figma",
];

export default function SkillsSet() {
  return (
    <div className="mt-16">
      <h1 className="text-3xl font-semibold">My Skills</h1>
      <div className="flex flex-wrap mt-3">
        {skills.map((skill) => (
          <p className="p-2 bg-zinc-800 hover:bg-zinc-800/60 rounded mr-2 mb-2 cursor-default	">
            {skill}
          </p>
        ))}
      </div>
    </div>
  );
}

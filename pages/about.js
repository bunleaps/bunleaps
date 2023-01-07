import React from "react";
import Image from "next/image";
import MyButton from "@/components/Button";

export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-semibold mt-4">About</h1>
      <p className="mt-3">
        Bunleap was born and raised by a family in the city of Takeo province,
        Cambodia. At the age of eleven and got in the top five in his class,
        Bunleap was selected out of thousands of candidates to attend the Liger
        Leadership Academy on a seven-year scholarship.
      </p>
      <p className="mt-3">
        Inspired by this opportunity, Bunleap wants to follow his dream as a
        front end web developer, entrepreneur, and engineer. These three
        keywords contain the essence of who he is. Even though he has many
        dreams, he is still open to new experiences and challenges to understand
        more about himself.
      </p>
      <h1 className="text-4xl font-semibold mt-4">Photo</h1>
      <span>Work in Progress... - Coming Soon!!!</span>
    </div>
  );
}

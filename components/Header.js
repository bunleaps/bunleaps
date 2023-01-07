import React from "react";
import Link from "next/link";
import MyButton from "@/components/Button";

const navLinks = [
  { name: "About", link: "/about" },
  { name: "Projects", link: "/projects" },
  { name: "Blog", link: "/blog" },
];

export default function Header() {
  return (
    <div className="sticky top-0 bg-zinc-900 text-white">
      <div className="w-full h-[5px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></div>
      <div className="w-full flex grow justify-center ring-1 ring-zinc-300/20">
        <div className="w-4/5 lg:w-2/5 flex justify-center lg:justify-between items-center flex-wrap lg:flex-nowrap">
          <div className="mt-5 md:mt-0 lg:mt-0 text-3xl h-100 flex items-center drop-shadow-lg select-none font-bold ">
            <Link href="/">BUNLEAP</Link>
          </div>
          <div className="text-lg h-100">
            <div className="flex items-center justify-evenly">
              {navLinks.map((navLink) => (
                <Link href={navLink.link}>
                  <span
                    key={navLink.name}
                    className="block px-[20px] py-6 hover:bg-zinc-800 border-b-4 border-b-transparent hover:border-b-4 hover:border-b-blue-500 cursor-pointer"
                  >
                    {navLink.name}
                  </span>
                </Link>
              ))}
              <MyButton toWhere="/contact">Contact</MyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

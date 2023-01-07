import React from "react";
import Image from "next/image";
import Link from "next/link";
import MyButton from "@/components/Button";

import { BsTwitter, BsYoutube, BsGithub } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="flex lg:flex-row-reverse flex-wrap lg:flex-nowrap">
      <div className="w-1/2 flex justify-start items-center">
        <Image
          className="rounded-full border border-zinc-700/40"
          src="/static/images/1x1_Bunleap.jpg"
          width={120}
          height={120}
          alt="Hero"
        />
      </div>
      <div>
        <h1 className="text-4xl font-semibold mt-4">Hi, I'm Bunleap</h1>
        <span>a front end developer</span>
        <p className="mt-5 w-full lg:w-3/4 text-gray-400">
          I'm specializing in building exceptional web interfaces and
          experiences. Currently, I'm focused on building accessible web
          applications for the web.
        </p>
        <div className="mt-5 text-xl flex">
          <Link href="https://github.com/bunleaps" legacyBehavior>
            <a target="_blank" className="hover:text-yellow-500">
              <BsGithub className="mr-3" />
            </a>
          </Link>
          <Link href="https://twitter.com/bunleapsorn" legacyBehavior>
            <a target="_blank" className="hover:text-blue-500">
              <BsTwitter className="mr-3" />
            </a>
          </Link>
          <Link href="https://www.youtube.com/@bunleaps" legacyBehavior>
            <a target="_blank" className="hover:text-red-500">
              <BsYoutube className="mr-3" />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

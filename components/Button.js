import React from "react";
import Link from "next/link";

export default function MyButton({ children, toWhere }) {
  return (
    <Link
      href={toWhere}
      className="rounded-md py-3 px-4 text-lg outline-offset-2 transition bg-zinc-800 text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-50 active:bg-zinc-800/50 active:text-zinc-50/70 group mr-2"
    >
      {children}
    </Link>
  );
}

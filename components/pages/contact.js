import React from "react";
import Image from "next/image";
import MyButton from "@/components/Button";

export default function Contact() {
  return (
    <div id="contact" className="mb-10 mt-10">
      <h1 className="text-4xl font-semibold mt-4">Get in Touch</h1>
      <form>
        <label className="text-lg mt-3 block">Name</label>
        <input
          type="text"
          className="block w-full rounded-md p-2 shadow-sm bg-zinc-800 text-gray-100"
        />
        <label className="text-lg mt-3 block">Email</label>
        <input
          type="email"
          className="block w-full rounded-md p-2 shadow-sm bg-zinc-800 text-gray-100"
        />
        <label className="text-lg mt-3 block">Message</label>
        <textarea
          rows={10}
          className="mb-5 block w-full rounded-md p-2 shadow-sm bg-zinc-800 text-gray-100"
        />
        <MyButton toWhere="#">Submit</MyButton>
      </form>
    </div>
  );
}

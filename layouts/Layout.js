import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }) {
  return (
    <div className="min-w-screen min-h-screen bg-zinc-900 text-white scroll-smooth">
      <Head>
        <title>Bunleap Sorn - Portfolio</title>
      </Head>
      <Header />
      <div className="w-full flex justify-center mt-5">
        <div className="w-4/5 lg:w-2/5">{children}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

import React from "react";

export default function Footer() {
  return (
    <div className="sm:sticky lg:absolute w-full bottom-0 bg-zinc-900 text-white">
      <div className="w-full flex justify-center">
        <div className="w-4/5 lg:w-2/5 border-t border-t-zinc-300/20">
          <p className="text-center text-lg m-3">
            Bunleap Sorn &#169; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

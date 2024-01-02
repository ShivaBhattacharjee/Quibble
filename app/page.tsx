import Navbar from "@/components/Navbar";
import { ClipboardList, Github, Route } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="">
      <Navbar />
      <div className="flex justify-center p-4  gap-4 items-center flex-col min-h-[90vh]">
        <h1 className=" text-6xl font-Montserrat md:text-7xl mb-3 lg:max-w-[600px]  text-center font-bold bg-gradient-to-r from-purple-700 via-white to-orange-400 text-transparent bg-clip-text animate-gradient">
          Let's Quibble and Create!
        </h1>
        <p className=" text-white/70 font-medium lg:max-w-[600px] text-center text-sm">
          Elevate Your Content with Professionalism and Humor we Craft Anything
          from Blogs and Poems to Stories, Lyrics.
        </p>
        <div className="flex justify-center items-center gap-3 flex-wrap">
          <Link
            href={"/chat"}
            className="flex bg-white text-black gap-3 items-center font-medium tracking-wider  p-3 rounded-md"
          >
            <Route />
            Get Started
          </Link>
          <button className="flex gap-3 items-center border-2 font-medium tracking-wider border-white/20 p-3 rounded-md">
            <Github /> Star on Github
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;

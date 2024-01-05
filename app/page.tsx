import { ClipboardList, Github, Route, ServerCog } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="">
      <div className="flex justify-center gap-4 items-center flex-col min-h-[90vh]">
        <h1 className=" text-5xl font-Montserrat md:text-7xl lg:text-8xl lg:max-w-[800px] mb-3 md:max-w-[600px]  text-center font-bold bg-gradient-to-r from-purple-700 via-blue-300 to-orange-400 text-transparent bg-clip-text animate-gradient">
          Let&apos;s Quibble and Create!
        </h1>
        <p className=" text-white/70 font-medium lg:max-w-[600px] text-center lg:text-md text-sm">
          Elevate Your Content with Professionalism and Humor we Craft Anything
          from Blogs and Poems to Stories, Lyrics.
        </p>
        <div className="flex justify-center flex-wrap items-center gap-3">
          <Link
            href={"/chat"}
            className="flex bg-white duration-200 hover:bg-white/80 cursor-pointer text-black gap-3 items-center font-medium tracking-wider p-3 md:p-5 md:text-lg rounded-md"
          >
            <Route />
            Get Started
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ShivaBhattacharjee/Quibble"
            className="flex duration-200 hover:scale-95 gap-3 items-center border-2 font-medium tracking-wider border-white/20 p-3 md:p-5 md:text-lg rounded-md"
          >
            <Github /> Star on Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default page;

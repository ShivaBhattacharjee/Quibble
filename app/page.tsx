import Navbar from "@/components/Navbar";
import { ClipboardList, Github, Route } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <section className="">
      <Navbar />
      <div className="flex justify-center p-4  gap-4 items-center flex-col min-h-[90vh]">
        <h1 className=" text-5xl mb-3 font-bold text-center">
          Welcome to Idk whatever
        </h1>
        <p className=" text-white/60 text-sm font-semibold">
          Generate whatever content you want blogs poem story lyrics or even
          love letter for your cursh we got you all covered
        </p>
        <div className="flex justify-center items-center gap-3 flex-wrap">
          <button className="flex bg-white text-black gap-3 items-center font-medium tracking-wider  p-3 rounded-md">
            <Route />
            Get Started
          </button>
          <button className="flex gap-3 items-center border-2 font-medium tracking-wider border-white/40 p-3 rounded-md">
            <Github /> Star on Github
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;

"use client";
import { Menu, Plus } from "lucide-react";
import React, { useState } from "react";

const History = () => {
  const [expandHistory, setExpandHistory] = useState<boolean>(false);
  return (
    <div className=" z-50">
      <div className=" h-10 w-10 lg:h-12 lg:w-12 bg-purple-700 z-50 justify-center flex items-center rounded-full">
        <Menu
          size={24}
          onClick={() => setExpandHistory(!expandHistory)}
          className=" cursor-pointer z-50"
        />
      </div>
      <div
        className={` w-full lg:w-72 lg:rounded-r-lg overflow-y-scroll z-20 h-full bg-purple-500 p-4 ${
          expandHistory ? "left-0" : "-left-[2000px]"
        } fixed top-0 duration-200`}
      >
        <div className="flex mt-12 justify-center items-center">
          <button className=" w-full text-center flex justify-center items-center border-2 p-2 rounded-lg font-semibold text-2xl uppercase">
            <Plus /> New Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default History;

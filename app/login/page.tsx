"use client";
import Toast from "@/utils/toast";
import React from "react";
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh]">
      <button
        onClick={() => Toast.ErrorShowToast("Under Development")}
        className=" bg-white duration-200 hover:bg-white/70 font-medium items-center text-black flex gap-3 p-4 rounded-lg shadow-sm shadow-purple-400"
      >
        <img
          src={
            "https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
          }
          className=" w-8 h-8"
          alt="google-icon"
        />
        Login With Google
      </button>
    </div>
  );
};

export default page;

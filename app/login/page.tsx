"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import { ClipLoader, HashLoader } from "react-spinners";
const page = () => {
  const session = useSession();
  if (session.status === "loading") {
    return (
      <div className="flex flex-col justify-center items-center min-h-[90vh]">
        <ClipLoader color={"#6366f1"} size={50} />
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh]">
      {session.status === "unauthenticated" ? (
        <button
          onClick={() => signIn("google")}
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
      ) : (
        <button
          onClick={() => signOut()}
          className=" bg-white mt-7 duration-200 hover:bg-white/70 font-medium items-center text-black flex gap-3 p-4 rounded-lg shadow-sm shadow-purple-400"
        >
          <img
            src={
              "https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png"
            }
            className=" w-8 h-8"
            alt="google-icon"
          />
          Logout
        </button>
      )}
    </div>
  );
};

export default page;

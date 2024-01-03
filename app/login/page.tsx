"use client";
import Toast from "@/utils/toast";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

import React, { useEffect } from "react";
import { ClipLoader } from "react-spinners";

const page = () => {
  const session = useSession();
  const router = useRouter();
  useEffect(() => {
    if (session.status === "authenticated") {
      Toast.SuccessshowToast(`Welcome ${session.data?.user?.name}`);
      router.push("/chat");
    }
  }, [session.status, session.data?.user?.name, router]);
  if (session.status === "loading") {
    return (
      <div className="flex flex-col justify-center items-center min-h-[90vh]">
        <ClipLoader color={"#6366f1"} size={50} />
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center min-h-[90vh]">
      {session.status === "unauthenticated" && (
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
      )}
    </div>
  );
};

export default page;

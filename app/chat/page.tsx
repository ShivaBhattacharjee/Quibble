"use client";
import ChatBody from "@/components/ChatBody";
import Toast from "@/utils/toast";
import { SendHorizontal } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();
  const session = useSession();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    Toast.ErrorShowToast("This is a test error");
  };
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/login");
    }
  }, [session]);
  return (
    <section className=" min-h-[92vh] relative text-white overflow-scroll flex flex-col justify-between align-middle">
      {/* chatbody */}
      <div className=" overflow-auto h-[90%] w-full max-w-full">
        <ChatBody
          clientProfile={session?.data?.user?.image || ""}
          clientName={session?.data?.user?.name!}
        />
      </div>

      <form
        className="flex flex-col gap-3 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className=" w-full lg:w-[60%] border-2 border-white/10 flex gap-7 flex-wrap justify-between bg-white bg-opacity-10 max-h-40 rounded-lg p-6 overflow-auto relative">
          <textarea
            placeholder="Enter a message"
            rows={1}
            className=" border-0 font-medium bg-transparent outline-none overflow-scroll w-[96%]"
            typeof="text"
          />
          <button className=" absolute duration-200 hover:bg-transparent hover:border-2 hover:border-purple-700 cursor-pointer right-3 p-2 md:top-6 top-4 bg-purple-600 rounded-full">
            <SendHorizontal />
          </button>
        </div>
        <p className=" text-sm font-medium text-white/70 text-center">
          Quibble may display inaccurate info, so double-check its responses
        </p>
      </form>
    </section>
  );
};

export default page;

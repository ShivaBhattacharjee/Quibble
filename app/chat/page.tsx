"use client";
import ChatBody from "@/components/ChatBody";
import ChatInput from "@/components/chatInput";
import { SendHorizontal } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { SyncLoader } from "react-spinners";

const Chat = () => {
  const router = useRouter();
  const session = useSession();
  const [response, setResponse] = React.useState<string>("");
  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/login");
    }
  }, [session]);
  return (
    <section className=" min-h-[92vh] relative text-white overflow-scroll flex flex-col justify-between align-middle">
      {/* chatbody */}
      <ChatBody />
      <div className="flex w-full flex-col gap-3 justify-center items-center">
        <ChatInput />
        <p className=" text-sm font-medium text-white/70 text-center">
          Quibble may display inaccurate info, so double-check its responses
        </p>
      </div>
    </section>
  );
};

export default Chat;

"use client";
import Toast from "@/utils/toast";
import axios from "axios";
import { SendHorizontal } from "lucide-react";
import React, { useState } from "react";
import { SyncLoader } from "react-spinners";
const ChatInput = () => {
  const [messages, setMessages] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  ("use server");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (messages.length > 1) {
        const body = {
          prompt: messages,
        };
        setLoading(true);
        const req = await axios.post("/api/public/ai", body);
        console.log("generating response");
        const res = await req.data;
        console.log(res);
      } else {
        Toast.ErrorShowToast("Message cannot be empty");
      }
    } catch (Error) {
      setLoading(false);
      Toast.ErrorShowToast("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className=" w-full lg:w-[60%] border-2 border-white/10 flex gap-7 flex-wrap justify-between bg-white bg-opacity-10 max-h-20 rounded-lg p-6 overflow-auto relative"
    >
      <div className=" w-full">
        {loading ? (
          <div className="flex w-full text-center justify-center items-center">
            <SyncLoader color="#a78bfa" size={10} />
          </div>
        ) : (
          <>
            <textarea
              placeholder="Enter a message"
              rows={1}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setMessages(e.target.value)
              }
              className=" border-0 font-medium bg-transparent outline-none overflow-scroll w-[96%]"
              typeof="text"
            />
            {!loading && (
              <button className=" absolute duration-200 hover:bg-transparent hover:border-2 hover:border-purple-700 cursor-pointer right-3 p-2 md:top-6 top-4 bg-purple-600 rounded-full">
                <SendHorizontal />
              </button>
            )}
          </>
        )}
      </div>
    </form>
  );
};

export default ChatInput;

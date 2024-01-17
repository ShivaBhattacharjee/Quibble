"use client";
import Toast from "@/utils/toast";
import axios from "axios";
import { Bot, SendHorizontal } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, FormEvent } from "react";
import { SyncLoader } from "react-spinners";

const Chat = () => {
  const router = useRouter();
  const session = useSession();
  const [message, setMessage] = useState<{ text?: string; isBot: boolean }[]>([
    {
      text: "This is ai",
      isBot: true,
    },
  ]);

  const [prompt, setPrompt] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const aiStyle =
    "bg-white/5 z-10 w-72 lg:w-96  break-words border-2 border-white/15 outline-none rounded-lg p-3";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const text = prompt;
      setPrompt("");
      setPrompt("");
      if (prompt.length > 1) {
        const body = {
          prompt: prompt,
        };
        setMessage([
          ...message,
          {
            text: text,
            isBot: false,
          },
        ]);
        setLoading(true);
        const req = await axios.post("/api/public/ai", body);
        console.log("generating response");
        const res = await req.data;
        console.log(res);
        setMessage([
          ...message,
          {
            text: text,
            isBot: false,
          },
          {
            text: res.result.response.candidates[0].content.parts[0].text,
            isBot: true,
          },
        ]);
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

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push("/login");
    }
  }, [session]);

  return (
    <section className=" min-h-[92vh] relative text-white overflow-scroll flex flex-col justify-between align-middle">
      {/* chatbody */}

      <div className=" overflow-auto h-[90%] w-full max-w-full">
        <div className="flex flex-col gap-4 mt-12">
          {/* client messages */}

          {message.map((msg, i) => (
            <div className="flex gap-4 self-end" key={i}>
              <div
                className="bg-purple-500 w-72 lg:w-96 break-words border-2 border-purple-300 outline-none
      rounded-lg p-3 self-end"
              >
                <pre className="whitespace-pre-wrap font-semibold">
                  <span>{msg.text}</span>
                </pre>
              </div>
              {session.data?.user?.image != "" ? (
                <img
                  src={session.data?.user?.image || ""}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
              ) : (
                <div className="w-10 h-10 rounded-full flex justify-center items-center uppercase font-bold text-xl bg-white text-black">
                  {session.data.user.name?.charAt(0).toUpperCase()}
                </div>
              )}
            </div>
          ))}

          {/* ai message */}

          {/* <div className={`flex items-center gap-4`}>
            <Bot size={30} />
            <div className={` ${aiStyle} flex gap-4 self-start items-center`}>
              <pre className=" whitespace-pre-wrap font-semibold">
                <span className="">Hello world this is ai message</span>
              </pre>
            </div>
          </div> */}
        </div>
      </div>

      <div className="flex w-full flex-col gap-3 justify-center items-center">
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
                    setPrompt(e.target.value)
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
        <p className=" text-sm font-medium text-white/70 text-center">
          Quibble may display inaccurate info, so double-check its responses
        </p>
      </div>
    </section>
  );
};

export default Chat;

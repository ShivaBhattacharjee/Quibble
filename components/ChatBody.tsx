import { Bot } from "lucide-react";
import React from "react";

interface ChatBodyProps {
  clientProfile: string;
  clientName: string;
}

const ChatBody: React.FC<ChatBodyProps> = ({ clientProfile, clientName }) => {
  const aiStyle =
    "bg-white/5 z-10 w-72 lg:w-96  break-words border-2 border-white/15 outline-none rounded-lg p-3";
  return (
    <div className="flex flex-col gap-4 mt-12">
      {/* client messages */}
      <div className="flex gap-4 self-end">
        <div
          className=" bg-purple-600 w-72 lg:w-96 break-words border-2 border-purple-300 outline-none
      rounded-lg p-3 self-end"
        >
          <pre className=" whitespace-pre-wrap font-semibold">
            <span>Hello world this is client message</span>
          </pre>
        </div>
        {clientProfile != "" ? (
          <img src={clientProfile} alt="" className=" w-8 h-8 rounded-full" />
        ) : (
          <div className=" w-10 h-10  rounded-full flex justify-center items-center uppercase font-bold text-xl bg-white text-black">
            {clientName?.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      {/* ai message */}
      <div className={`flex items-center gap-4`}>
        <Bot size={30} />
        <div className={` ${aiStyle} flex gap-4 self-start items-center`}>
          <pre className=" whitespace-pre-wrap font-semibold">
            <span className="">Hello world this is ai message</span>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;

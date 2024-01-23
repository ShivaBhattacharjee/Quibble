"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import axios from "axios";
import { SendHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Toast from "@/utils/toast";

const Chat = () => {
    const router = useRouter();
    const session = useSession();
    const [message, setMessage] = useState<{ text?: string; isBot: boolean }[]>(() => [{ text: "", isBot: true }]);
    const [prompt, setPrompt] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const msgEnd = React.useRef<HTMLDivElement>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const text = prompt;
            setPrompt("");
            if (prompt.length > 1) {
                const body = { prompt };
                setMessage((prevMessages) => [...prevMessages, { text, isBot: false }]);
                setLoading(true);
                const req = await axios.post("/api/public/ai", body);
                console.log("generating response");
                const res = await req.data;
                console.log(res);
                setMessage((prevMessages) => [
                    ...prevMessages,
                    {
                        text: res?.result?.response?.candidates[0]?.content.parts[0]?.text || "Sorry I didn't get that",
                        isBot: true,
                    },
                ]);
            } else {
                Toast.ErrorShowToast("Message cannot be empty");
            }
        } catch (error) {
            setLoading(false);
            setMessage((prevMessages) => [
                ...prevMessages,
                {
                    text: "Request failed",
                    isBot: true,
                },
            ]);
            Toast.ErrorShowToast("Something went wrong");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (session.status === "unauthenticated") {
            router.push("/login");
        }
    }, [session, router]);
    useEffect(() => {
        msgEnd.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    const handleTextareaKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            const fakeSubmitEvent = new Event("submit") as unknown as React.FormEvent<HTMLFormElement>;
            handleSubmit(fakeSubmitEvent);
        }
    };

    return (
        <section className="min-h-[92vh] w-full relative text-white overflow-y-scroll flex flex-col justify-between align-middle">
            {/* chatbody */}
            <div className=" overflow-y-scroll overflow-x-hidden h-[90%] w-full max-w-full">
                <div className="flex flex-col mb-9 mt-9 relative">
                    {message.map((msg, index) => (
                        <React.Fragment key={index}>
                            {msg.text !== "" && (
                                <div className={`break-words max-w-[90%] lg:max-w-[30%] ${msg.isBot ? "self-start" : "self-end"} px-3 py-3`}>
                                    <pre className={`${msg.isBot ? "bg-purple-800 rounded-lg " : "border-2 border-white/30 w-auto font-bold rounded-lg break-words"} p-4 rounded-lg whitespace-pre-wrap `}>
                                        <span>{msg.text}</span>
                                    </pre>

                                    {/* message end */}
                                    <div ref={msgEnd}></div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                    {loading && (
                        <div className={`break-words bg-purple-700 text-sm flex gap-7 self-start p-3 rounded-lg`}>
                            <SyncLoader size={6} color="#fff" />
                        </div>
                    )}
                </div>
            </div>

            <div className="flex w-full flex-col gap-3 justify-center items-center">
                <form onSubmit={handleSubmit} className="w-full lg:w-[60%] border-2 border-white/10 flex gap-7 flex-wrap justify-between bg-white bg-opacity-10 max-h-20 rounded-lg p-6 overflow-auto relative">
                    <div className="w-full">
                        {loading ? (
                            <div className="flex font-semibold tracking-widest gap-4 w-full text-center justify-center items-center">
                                Thinking <SyncLoader color="#fff" size={3} />
                            </div>
                        ) : (
                            <>
                                <textarea onKeyDown={handleTextareaKeyDown} placeholder="Enter a message" rows={1} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)} className="border-0 font-medium bg-transparent outline-none overflow-scroll w-[96%]" typeof="text" />
                                {!loading && (
                                    <button className="absolute duration-200 hover:bg-transparent hover:border-2 hover:border-purple-700 cursor-pointer right-3 p-2 top-4 bg-purple-600 rounded-full">
                                        <SendHorizontal />
                                    </button>
                                )}
                            </>
                        )}
                    </div>
                </form>
                <p className="text-sm font-medium text-white/70 text-center">Quibble may display inaccurate info, so double-check its responses</p>
            </div>
        </section>
    );
};

export default Chat;

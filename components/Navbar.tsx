"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const Navbar: React.FC = () => {
    const session = useSession();
    const [expandMenu, setExpandMenu] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setExpandMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);
    return (
        <nav ref={menuRef} className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-3">
                <Link href={"/"} className=" font-semibold  font-Montserrat uppercase text-3xl tracking-wider bg-gradient-to-r from-white to-purple-700 bg-clip-text text-transparent">
                    Quibble
                </Link>
            </div>
            <div className="flex gap-4 items-center">
                {session.status === "authenticated" ? (
                    <div className=" relative accent-violet-400 cursor-pointer">
                        {session.data?.user?.image ? (
                            <div onClick={() => setExpandMenu(!expandMenu)} className="flex gap-3 items-center font-semibold">
                                <img alt={`an image of ${session.data.user.name}` || "image of user"} src={session.data?.user?.image} className=" h-9 w-9 rounded-full" />
                                <div className="flex items-center">
                                    <span className=" truncate w-20 hidden md:block text-sm">{session?.data?.user?.name || "???"}</span>
                                    <ChevronDown className={`${expandMenu && "rotate-180"} duration-200`} />
                                </div>
                            </div>
                        ) : (
                            <div onClick={() => setExpandMenu(!expandMenu)} className="flex cursor-pointer items-center gap-3 font-semibold">
                                <div className="w-10 h-10 text-xl bg-white rounded-full flex text-black justify-center items-center font-bold">{session.data?.user?.name?.charAt(0)}</div>
                                <div className="flex items-center">
                                    <span className=" truncate w-20 hidden md:block text-sm">{session?.data?.user?.name || "???"}</span>
                                    <ChevronDown />
                                </div>
                            </div>
                        )}
                        <div className={`absolute ${expandMenu ? "scale-100" : "scale-0"} duration-150 right-0 top-12 shadow-md shadow-purple-400/5 p-2 w-48 h-auto z-50 text-sm rounded-lg bg-black border-white/20 border-2 flex flex-col gap-3 overflow-y-scroll`}>
                            <span className="truncate w-24">{session?.data?.user?.name || "???"}</span>
                            <span className="truncate w-[90%]">{session?.data?.user?.email || "???"}</span>
                            <button onClick={() => signOut()} className=" p-2 flex gap-3 cursor-pointer justify-center items-center duration-200 hover:bg-white/80 font-medium tracking-wide bg-white rounded-lg text-black">
                                <LogOut />
                                SignOut
                            </button>
                        </div>
                    </div>
                ) : (
                    <Link href={"/login"} className=" bg-white flex gap-3 text-center p-2 text-black rounded-lg justify-center items-center md:text-lg duration-200 hover:bg-white/80 font-medium  cursor-pointer">
                        <LogIn />
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

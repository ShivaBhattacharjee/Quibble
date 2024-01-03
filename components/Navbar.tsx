"use client";
import { LogIn } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();
  return (
    <nav className="flex flex-wrap justify-between items-center">
      <Link
        href={"/"}
        className=" font-semibold  font-Montserrat uppercase text-3xl tracking-wider bg-gradient-to-r from-white to-purple-700 bg-clip-text text-transparent"
      >
        Quibble
      </Link>
      <div className="flex gap-4 items-center">
        {session.status === "authenticated" ? (
          <Link href={"/login"}>
            {session.data?.user?.image ? (
              <img
                src={session.data?.user?.image}
                className="h-10 w-10 rounded-full"
              />
            ) : (
              <div>
                <div className="w-10 h-10 text-xl bg-white rounded-full flex text-black justify-center items-center font-bold">
                  {session.data?.user?.name?.charAt(0)}
                </div>
              </div>
            )}
          </Link>
        ) : (
          <Link
            href={"/login"}
            className=" bg-white flex gap-3 text-center p-2 text-black rounded-lg justify-center items-center md:text-lg duration-200 hover:bg-white/80 font-medium  cursor-pointer"
          >
            <LogIn />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

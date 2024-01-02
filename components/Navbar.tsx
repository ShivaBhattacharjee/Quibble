import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center">
      <Link
        href={"/"}
        className=" font-semibold  font-Montserrat uppercase text-3xl tracking-wider bg-gradient-to-r from-white to-purple-700 bg-clip-text text-transparent"
      >
        Quibble
      </Link>
      <div className="flex gap-4 items-center">
        <Link
          href={"/login"}
          className=" bg-white text-center p-2 text-black rounded-lg w-24 md:text-lg duration-200 hover:bg-white/80 font-medium  cursor-pointer"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

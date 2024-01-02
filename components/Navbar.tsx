import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-between items-center">
      <h1 className=" font-semibold uppercase text-3xl tracking-wide bg-gradient-to-r from-white to-purple-700 bg-clip-text text-transparent">
        Logo
      </h1>
      <div className="flex gap-4 items-center">
        <button className=" bg-white p-2 text-black rounded-lg w-24 md:text-lg duration-200 hover:bg-white/80 font-medium  cursor-pointer">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

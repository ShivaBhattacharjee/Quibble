import React from "react";
import { HashLoader } from "react-spinners";

const loading = () => {
  return (
    <div className=" min-h-screen bg-black">
      <HashLoader className="#9333EA" />
    </div>
  );
};

export default loading;

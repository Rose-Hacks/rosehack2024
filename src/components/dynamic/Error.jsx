import React from "react";
import Image from "next/image";
import img from "../../../public/svg/blue-robot.svg";
const Error = ({ code, error, message }) => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed bg-blur-h bg-cover font-advent">
      <Image src={img} className="h-1/4 animate-bounce-2s mb-2" />
      <p className="text-center text-6xl font-extrabold text-rosehack-blue m-0">
        {code}
      </p>
      <p className="text-center text-lg md:text-2xl font-bold text-white m-0">
        {error}
      </p>
      <p className="text-center text-sm md:text-lg  text-rosehack-teal m-0">
        {message}
      </p>
    </div>
  );
};

export default Error;

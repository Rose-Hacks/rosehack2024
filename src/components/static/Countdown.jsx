"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const CountDown = ({ className }) => {
  const [diffTime, setDiffTIme] = useState(
    new Date("January 13, 2024 12:00:00") - new Date()
  );
  useEffect(() => {
    const interval = setInterval(
      () => setDiffTIme(new Date("January 13, 2024 12:00:00") - new Date()),
      1000
    );

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={className}>
      <div className="backdrop-blur-md rounded-3xl">
        <div className="p-2 border-[1px] rounded-t-3xl border-white/20 w-full font-nasalization text-lg md:text-3xl text-white bg-gradient-to-r from-white/20 to-white/0">
          January 13-14
        </div>
        <div className="border-t-0 border-[1px] rounded-b-3xl border-white/20 p-2 w-full text-white bg-gradient-to-b from-black/50 to-black/0 font-orbitron flex flex-col items-center">
          <div className="text-xl md:text-2xl flex items-end min-w-3/4 justify-evenly">
            <p>{Math.ceil(diffTime / (1000 * 60 * 60 * 24))}</p>
            <p className="text-[10px] md:text-xs mx-1">days</p>
            <p>
              {Math.ceil((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}{" "}
              : {Math.ceil((diffTime % (1000 * 60 * 60)) / (1000 * 60))} :{" "}
              {Math.ceil((diffTime % (1000 * 60)) / 1000)}
            </p>
          </div>
          <Link
            target="_blank"
            href="https://forms.gle/Pr8HMgaLWunGjWVv6"
            className="no-underline hover:scale-110 duration-300 text-white relative bg-gradient-to-r from-rosehack-pink-200 to-rosehack-blue min-w-1/2 rounded-full my-3"
          >
            <div className="absolute bg-gradient-to-r from-rosehack-pink-200 to-rosehack-blue w-full h-full rounded-full blur-sm" />
            <p className="relative text-base md:text-xl bg-black/80 m-[0.5px]  hover:bg-gradient-to-r from-rosehack-pink-200 to-rosehack-blue rounded-full py-1 text-center w-full px-4 ">
              interest form
            </p>
          </Link>
        </div>
      </div>
      <div className="border-t-0 rounded-b-3xl p-2 w-full text-white bg-gradient-to-b font-orbitron flex flex-col">
        <div className="ml-5 self-start text-base md:text-xl flex items-end min-w-3/4 justify-start"></div>
        <Link
          target="_blank"
          href="https://crowdfunding.ucr.edu/o/university-of-california-riverside/i/ucrcrowdfunding/s/winc-fy24"
          className="self-center !z-50 no-underline hover:scale-110 duration-300 text-white relative bg-gradient-to-r from-rosehack-pink-200 to-rosehack-blue min-w-1/2 rounded-full my-4"
        >
          <div className="absolute bg-gradient-to-r from-rosehack-pink-200 to-rosehack-blue w-full h-full rounded-full blur-sm" />
          <p className="relative text-base md:text-lg bg-black/80 m-[0.5px]  hover:bg-gradient-to-r from-rosehack-pink-200 to-rosehack-blue rounded-full py-1 text-center w-full px-4 ">
            donate now
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CountDown;

"use client";
import { useState, useEffect } from "react";
import { CONFIG } from "@/data/Config";

const Digits = ({ value, text }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="mb-0 text-lg md:text-2xl font-bold w-8 md:w-14 flex items-center justify-center mr-1 md:mr-2 font-orbitron">
        {parseInt(value / 10)}
        {value % 10}
      </p>
      <p className="text-xs md:text-sm font-montserrat">{text}</p>
    </div>
  );
};

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = CONFIG.date - new Date();

      setTime({
        DAYS: Math.ceil(diff / (1000 * 60 * 60 * 24)),
        HOURS: Math.ceil((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        MINUTES: Math.ceil((diff % (1000 * 60 * 60)) / (1000 * 60)),
        SECONDS: Math.ceil((diff % (1000 * 60 * 60)) / 1000) % 60,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-2">
      {Object.entries(time).map(([text, value], index) => (
        <Digits key={index} text={text} value={value} />
      ))}
    </div>
  );
};

export default Countdown;

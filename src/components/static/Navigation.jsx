"use client";
import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../public/LOGO.svg";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Glow = () => {
  return (
    <div className="w-1/4 h-full left-[50%] translate-x-[-50%] rounded-[50%] bg-[#fff] bottom-[-100%] absolute bg-transparent shadow-[0px_10px_20px_10px_rgba(255,255,255,1)]"></div>
  );
};

const Navigation = () => {
  const params = useParams();
  const [currentHash, setCurrentHash] = useState();
  useEffect(() => {
    setCurrentHash(window.location.hash);
  }, [params]);

  return (
    <div className="w-full h-[7%] flex flex-row text-white fixed top-0 z-40 bg-[#403745] backdrop-blur-sm bg-opacity-50">
      <Image
        src={LOGO}
        alt="logo"
        width={40}
        height={40}
        className="ml-5 my-auto"
      />
      <div className="w-1/2 h-full m-auto flex flex-row relative place-content-around font-advent font-thin text-2xl scroll-smooth relative items-center">
        <Link
          href="#top"
          className={`text-white h-full no-underline flex align-center relative overflow-hidden
          ${currentHash === "#top" ? "border-b-2" : ""}`}
        >
          <div className="m-auto">Home</div>
          {currentHash === "#top" ? <Glow /> : <></>}
        </Link>
        <Link
          href="#abt"
          className={`text-white h-full no-underline flex align-center relative overflow-hidden
          ${currentHash === "#abt" ? "border-b-2" : ""}`}
        >
          <div className="m-auto">About</div>
          {currentHash === "#abt" ? <Glow /> : <></>}
        </Link>
        <Link
          href="#team"
          className={`text-white h-full no-underline flex align-center relative overflow-hidden
          ${currentHash === "#team" ? "border-b-2" : ""}`}
        >
          <div className="m-auto">Team</div>
          {currentHash === "#team" ? <Glow /> : <></>}
        </Link>
        <Link
          href="#judges"
          className={`text-white h-full no-underline flex align-center relative overflow-hidden
          ${currentHash === "#judges" ? "border-b-2" : ""}`}
        >
          <div className="m-auto">Judges</div>
          {currentHash === "#judges" ? <Glow /> : <></>}
        </Link>
        <Link
          href="#faq"
          className={`text-white h-full no-underline flex align-center relative overflow-hidden
          ${currentHash === "#faq" ? "border-b-2" : ""}`}
        >
          <div className="m-auto">FAQ</div>
          {currentHash == "#faq" ? <Glow /> : <></>}
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

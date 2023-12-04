"use client";
import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../public/LOGO.svg";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

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
      <div className="w-1/2 h-full m-auto flex flex-row relative place-content-around font-advent font-thin text-2xl scroll-smooth relative">
        <Link
          href="#top"
          className={`text-white h-full no-underline ${
            currentHash === "#top" ? "border-b-2" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="#abt"
          className={`text-white h-full no-underline ${
            currentHash === "#abt" ? "border-b-2" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="#abt"
          className={`text-white h-full no-underline ${
            currentHash === "#abt" ? "border-b-2" : ""
          }`}
        >
          Team
        </Link>
        <Link
          href="#judges"
          className={`text-white h-full no-underline ${
            currentHash === "#judges" ? "border-b-2" : ""
          }`}
        >
          Judges
        </Link>
        <Link
          href="#faq"
          className={`text-white h-full no-underline ${
            currentHash === "#faq" ? "border-b-2" : ""
          }`}
        >
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

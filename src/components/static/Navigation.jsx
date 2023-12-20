"use client";
import Image from "next/image";
import LOGO from "../../../public/LOGO.svg";
import { useEffect, useState, useRef } from "react";

const Glow = () => {
  return (
    <div className="w-1/4 h-full left-[50%] translate-x-[-50%] rounded-[50%] bg-[#fff] bottom-[-100%] absolute bg-transparent shadow-[0px_10px_20px_10px_rgba(255,255,255,1)]"></div>
  );
};

const SectionNavButton = ({
  sectionName,
  sectionId,
  currentHash,
  setCurrentHash,
}) => {
  const idWithHash = `#${sectionId}`;
  const navButtonRef = useRef();
  const yOffset = -50;
  useEffect(() => {
    navButtonRef.current.onclick = () => {
      const el = document.getElementById(sectionId);
      if (el == null) return;
      const scrollToY =
        el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: scrollToY, behavior: "smooth" });
      setCurrentHash(`#${sectionId}`);
    };
  }, []);
  return (
    <div
      className={`text-white h-full no-underline flex align-center relative overflow-hidden cursor-pointer ${
        currentHash === idWithHash ? "border-b-2" : ""
      }`}
      ref={navButtonRef}
    >
      <div className="m-auto">{sectionName}</div>
      {currentHash === idWithHash ? <Glow /> : <></>}
    </div>
  );
};

const Navigation = () => {
  const [currentHash, setCurrentHash] = useState();
  const sections = [
    { name: "Home", id: "top" },
    { name: "About", id: "abt" },
    { name: "Team", id: "team" },
    { name: "Judges", id: "judges" },
    { name: "FAQ", id: "faq" },
  ];
  return (
    <div className="w-full sm:h-[44.375px] flex flex-row text-white fixed top-0 z-40 bg-[#403745] backdrop-blur-sm bg-opacity-50">
      <Image
        src={LOGO}
        alt="logo"
        width={40}
        height={40}
        className="ml-5 my-auto"
      />
      <div className="lg:w-1/2 h-[40] w-full h-full mx-auto flex flex-row relative place-content-around font-advent font-thin text-2xl scroll-smooth relative items-center">
        {sections.map(({ name, id }) => (
          <SectionNavButton
            key={name}
            sectionName={name}
            sectionId={id}
            currentHash={currentHash}
            setCurrentHash={setCurrentHash}
          />
        ))}
      </div>
    </div>
  );
};

export default Navigation;

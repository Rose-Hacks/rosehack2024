"use client";

import { useState } from "react";
import LOGO from "@/public/LOGO.svg";
import Image from "next/image";
import Link from "next/link";
import { TABS } from "@/data/dynamic/Navigation";
import { usePathname } from "next/navigation";
import { CONFIG } from "@/data/Config";
import { BiSolidDownArrow } from "react-icons/bi";

const Navigation = () => {
  const [expand, setExpand] = useState(false);
  const pathName = usePathname();
  const [tabs, setTabs] = useState(TABS[pathName.split("/")[1]]);

  return (
    <>
      <div className="flex lg:hidden w-full bg-gradient-to-br from-rosehack-blue/30 to-rosehack-purple-100/20 h-12 items-center fixed z-20 font-montserrat">
        <div
          className="flex items-center hover:cursor-pointer"
          onClick={() => setExpand(!expand)}
        >
          <Image
            src={LOGO}
            className="w-10 h-10 mx-2"
            alt={`${CONFIG.name} Logo`}
          />
          <div className="text-white text-xl font-semibold">
            {pathName.split("/")[2]}
          </div>
        </div>
      </div>
      <div
        className={`z-10 lg:flex lg:w-[12%] bg-black overflow-y-scroll ${
          expand ? "left-0 h-screen w-1/2 fixed mt-5" : `hidden`
        }`}
      >
        <div className="bg-gradient-to-br from-rosehack-blue/30 to-rosehack-purple-100/20 min-h-screen overflow-x-hidden h-fit flex flex-col justify-between items-center w-full ">
          <div className="hidden lg:flex items-center my-3">
            <Image
              src={LOGO}
              className="w-10 h-10 mx-2"
              alt={`${CONFIG.name} Logo`}
            />
            <p className="text-white font-bold text-lg pr-2 m-0">
              {CONFIG.name.toUpperCase()}
            </p>
          </div>
          <div className="w-full flex flex-col items-center h-full">
            {Object.entries(tabs)
              .filter(([title]) => title !== " " && title !== "dropdown")
              .map(([title, subTabs], index) => (
                <div key={index} className="w-full">
                  <p
                    className={`text-white text-xl font-poppin font-bold w-full px-2 mb-0 flex items-center justify-between hover:cursor-pointer ${subTabs.mt}`}
                    onClick={() =>
                      setTabs({
                        ...tabs,
                        [title]: { ...subTabs, expand: !subTabs.expand },
                      })
                    }
                  >
                    {title}
                    {tabs.dropdown && (
                      <BiSolidDownArrow
                        className={`text-sm duration-300 ${
                          subTabs.expand && "rotate-180"
                        }`}
                      />
                    )}
                  </p>
                  {(subTabs.expand || !tabs.dropdown) &&
                    subTabs.tabs.map((tab, index) => (
                      <Link
                        key={index}
                        href={tab.link}
                        className="no-underline p-0 w-full"
                      >
                        <div
                          onClick={() => setExpand(false)}
                          className={`relative w-full flex [&>*]:text-white items-center justify-start py-1 pl-[10%] ${
                            pathName.endsWith(tab.link) &&
                            "bg-gradient-to-l  from-white/30 "
                          } ${
                            !pathName.endsWith(tab.link) &&
                            "[&>*]:hover:text-rosehack-teal"
                          }`}
                        >
                          {tab.icon}
                          <p className="text-lg m-0 font-thin">{tab.name}</p>
                        </div>
                      </Link>
                    ))}
                </div>
              ))}
          </div>
          <div className="w-full flex flex-col items-center mb-3">
            {tabs[" "].map((tab, index) => (
              <Link
                key={index}
                href={tab.link}
                onClick={() => tab.onClick()}
                className="no-underline w-full"
              >
                <div
                  onClick={() => setExpand(false)}
                  className={`w-full flex [&>*]:text-white items-center justify-start pl-[10%] py-1 font-thin ${
                    !pathName.endsWith(tab.link) &&
                    "[&>*]:hover:text-rosehack-teal"
                  }`}
                >
                  {tab.icon}
                  <div className="text-lg">{tab.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

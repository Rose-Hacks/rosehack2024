import Image from "next/image";
import LOGO from "../../../../public/LOGO.svg";
import building from "../../../../public/svg/building.svg";
import { AiFillHeart } from "react-icons/ai";
import { CONTACTS } from "@/data/static/Contacts";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative w-full h-full font-advent text-white">
      <div className="relative flex">
        <Image src={building} alt="building" className="w-full" />
        <div className="absolute bg-gradient-to-t from-black via-black/100 via-10% w-full h-full" />
      </div>
      <div className="bottom-0 absolute flex flex-col items-center justify-center z-10 w-full gap-2">
        <Image src={LOGO} alt="logo" className="w-1/12" />
        <div className="text-lg md:text-4xl">ROSEHACK 2024</div>
        <div className="text-xs md:text-xl">
          Made with <AiFillHeart className="inline" /> by the Rose Hack team at
          University of California, Riverside.
        </div>
        <div className="flex space-x-5  mb-8">
          {CONTACTS.map((contact, index) => (
            <Link
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white no-underline text-2xl hover:cursor-pointer hover:!text-rosehack-teal hover:-translate-y-1 duration-200"
            >
              {contact.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

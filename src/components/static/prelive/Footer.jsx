import Image from "next/image";
import LOGO from "../../../../public/LOGO.svg";
import building from "../../../../public/svg/building.svg";
import { AiFillHeart } from "react-icons/ai";
import { CONTACTS } from "@/data/static/Contacts";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-screen h-full bg-blur font-advent text-white">
      <div className="relative">
        <Image
          src={building}
          alt="building"
          className=" w-full opacity-25 -scale-x-100 md:mt-0 mt-[35%]"
        />
        <Image
          src={building}
          alt="building"
          className="w-full relative -mt-[35%] md:-mt-[75%]"
        />
        <div className="absolute bg-gradient-to-t via-black from-black w-screen z-1 h-1/4 -bottom-20" />
      </div>

      <div className="flex w-screen h-2/3 bg-black items-center">
        <div className="flex items-center w-3/4 justify-start ml-[5%] mt-[10%]">
          <Image src={LOGO} alt="logo" className="w-1/12 mr-10" />
          <div>
            <p className="text-5xl">ROSEHACK 2024</p>
            <p className="text-2xl">
              Made with <AiFillHeart className="inline" /> by the Rose Hack team
              at UCR
            </p>
          </div>
        </div>
        <div className="flex-col h-fit border-r-2 px-5 mr-5 border-white text-5xl">
          CONTACTS
          {CONTACTS.map((contact, index) => (
            <div key={index} className="flex flex-row-reverse my-3">
              <Link
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white no-underline "
              >
                {contact.icon}
              </Link>
              <div className="text-2xl align-center mr-5">{contact.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;

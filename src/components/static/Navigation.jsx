import Image from "next/image";
import Link from "next/link";
import LOGO from "../../../public/LOGO.svg";

const Navigation = () => {
  return (
    <div className="w-full h-[12%] flex flex-row text-white fixed z-40 bg-[#403745] backdrop-blur-sm bg-opacity-50">
      <Image
        src={LOGO}
        alt="logo"
        width={"50"}
        height={"50"}
        className="ml-5 my-auto"
      />
      <div className="m-auto flex flex-row w-1/2 relative bottom-[-5] place-content-around font-advent text-lg">
        <Link href="#top" className="text-white no-underline">
          <p>Home</p>
        </Link>
        <Link href="#abt" className="text-white no-underline">
          <p>About</p>
        </Link>
        <Link href="#team" className="text-white no-underline">
          <p>Team</p>
        </Link>
        <Link href="#judges" className="text-white no-underline">
          <p>Judges</p>
        </Link>
        <Link href="#FAQ" className="text-white no-underline">
          <p>FAQ</p>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

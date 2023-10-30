import Image from "next/image";
import LOGO from "../../../../public/LOGO.svg";

const Footer = () => {
  return (
    <div className="flex w-screen h-full bg-black grid-cols-4">
      <div className="col-span-3">
        <Image src={LOGO} className="w-1/6 mt-12 mb-2" alt={`Logo`} />
      </div>
      <div className="text-white"> SOCIALS</div>
    </div>
  );
};

export default Footer;

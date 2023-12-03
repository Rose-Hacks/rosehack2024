import Image from "next/image";
import bg from "../../../public/svg/welcome/bg.svg";
import bgsm from "../../../public/svg/welcome/bgsm.svg";

const Welcome = () => {
  return (
    <div className="relative flex items-center justify-center">
      <Image src={bgsm} className="w-full block md:hidden" />
      <Image src={bg} className="w-10/12 lg:w-4/5 hidden md:block" />
      <div className="absolute w-1/2 md:w-1/3 lg:w-1/5 text-white text-center text-xs sm:text-base md:text-lg lg:text-xl font-montserrat">
        Rose Hack welcomes both undergraduate and high school students for a
        lively weekend filled with innovation, discovery, networking,
        mentorship, and so much more!
      </div>
    </div>
  );
};

export default Welcome;

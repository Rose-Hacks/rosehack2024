import Image from "next/image";
import bg from "../../../public/svg/welcome/bg.svg";
import bgsm from "../../../public/svg/welcome/bgsm.svg";
import landingCircleBlue from "../../../public/svg/landing/landing-circle-blue.svg";

const Welcome = () => {
  return (
    <div className="relative w-fit flex items-center justify-center">
      <Image src={bgsm} className="w-full block md:hidden" />
      <Image src={bg} className="w-4/5 hidden md:block" />
      <div className="absolute w-1/3 md:w-1/4 lg:w-1/5 text-white text-center text-xs md:text-xl font-montserrat">
        Rose Hack welcomes both undergraduate and high school students for a
        lively weekend filled with innovation, discovery, networking,
        mentorship, and so much more!
      </div>
      <div className="w-4/5 md:w-1/2 absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2">
        <Image
          alt="landing circle"
          src={landingCircleBlue}
          className="w-full animate-[spin_5s_ease-in-out_infinite] "
        />
      </div>
    </div>
  );
};

export default Welcome;

import Image from "next/image";
import landingCircleBlue from "../../../../public/svg/landing/landing-circle-blue.svg";
import landingCirclePink from "../../../../public/svg/landing/landing-circle-pink.svg";
import landingCircle from "../../../../public/svg/landing/landing-circle.svg";

const LandingCircle = () => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full items-center justify-center flex">
      <div className="relative lg:w-1/2 h-fit">
        <Image alt="landing circle" src={landingCircle} className="w-full" />
        <div className="w-full absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2">
          <Image
            alt="landing circle"
            src={landingCircleBlue}
            className="w-full animate-[spin_5s_ease-in-out_infinite] "
          />
        </div>
        <div className="w-full absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2">
          <Image
            alt="landing circle"
            src={landingCirclePink}
            className="w-full animate-[spin_8s_linear_infinite]"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingCircle;

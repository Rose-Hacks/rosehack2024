import React from "react";
import Image from "next/image";
import landingCircleBlue from "../../../public/svg/landing/landing-circle-blue.svg";
import landingCirclePink from "../../../public/svg/landing/landing-circle-pink.svg";
import landingCircle from "../../../public/svg/landing/landing-circle.svg";
import landingTriangle from "../../../public/svg/landing/landing-triangles.svg";
const LandingCircle = ({ className }) => {
  return (
    <div className={className}>
      <div className="relative w-fit h-fit">
        <Image alt="landing circle" src={landingCircle} />
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
        <Image
          src={landingTriangle}
          className="w-1/2 absolute right-1/2 translate-x-1/2 -top-[30%] opacity-30"
        />
      </div>
    </div>
  );
};

export default LandingCircle;

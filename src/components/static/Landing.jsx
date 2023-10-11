import React from "react";
import Image from "next/image";
import building from "../../../public/svg/building.svg";
import LandingCircle from "./LandingCircle.jsx";
import blackBuilding from "../../../public/svg/blackbuilding.svg";
import CountDown from "./Countdown.jsx";
import blueBlur from "../../../public/svg/blue-blur.svg";
import pink100blur from "../../../public/svg/pink-100-blur.svg";

const Landing = () => {
  return (
    <div className="w-full relative overflow-x-clip">
      <Image
        src={building}
        alt="building"
        className=" w-full opacity-25 -scale-x-100 md:mt-[0%] mt-[35%]"
      />
      <LandingCircle className="absolute top-0 left-1/2 -translate-x-1/2 w-full md:w-fit" />
      <Image
        src={building}
        alt="building"
        className="w-full relative -mt-[35%] md:-mt-[75%]"
      />
      <Image
        src={blackBuilding}
        alt="building"
        className="w-full relative md:-mt-[50%] -mt-[35%]"
      />
      <p className="w-full text-center font-nasalization text-3xl md:text-5xl absolute top-[20%] text-white">
        ROSEHACK 2024
      </p>
      <p className="w-full text-center font-nasalization text-2xl md:text-4xl absolute top-[30%] md:top-[25%] text-white">
        COMING SOON
      </p>
      <CountDown className="w-1/2 md:w-1/4 absolute top-[40%] md:top-[30%] left-1/2 -translate-x-1/2" />
      <Image
        src={blueBlur}
        alt="blueBlur"
        className="absolute md:hidden right-1/3 -mt-[60%] w-full opacity-60 scale-150"
      />
      <Image
        src={pink100blur}
        alt="pinkBlur"
        className="absolute md:hidden left-1/3 -mt-[10%] w-full opacity-60 scale-150"
      />
    </div>
  );
};

export default Landing;

import React from "react";
import Image from "next/image";
import blueBlur from "../../../public/svg/blue-blur.svg";
import pink100Blur from "../../../public/svg/pink-100-blur.svg";

const Title = ({ title, left = blueBlur, right = pink100Blur }) => {
  return (
    <div className="relative w-1/2 md:w-1/6 my-3 md:my-5">
      <Image
        src={left}
        alt="blur"
        className="absolute w-full -left-1/2 top-1/2 -translate-y-[40%] scale-y-75 scale-125 translate-x-1/4"
      />
      <Image
        src={right}
        alt="blur"
        className="absolute w-2/3 -right-0 top-[30%] -translate-y-[40%] translate-x-1/4 opacity-70"
      />
      <p className="backdrop-blur-md w-full relative font-montserrat text-2xl text-white text-center py-2 bg-black/50 border-[0.5px] border-white/50">
        {title}
      </p>
    </div>
  );
};

export default Title;

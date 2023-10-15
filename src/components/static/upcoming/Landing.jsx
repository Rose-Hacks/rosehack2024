import Image from "next/image";
import building from "../../../../public/svg/building.svg";
import LandingCircle from "./LandingCircle.jsx";
import blackBuilding from "../../../../public/svg/blackbuilding.svg";
import Content from "./Content.jsx";
import blueBlur from "../../../../public/svg/blue-blur.svg";
import pink100blur from "../../../../public/svg/pink-100-blur.svg";

const Landing = () => {
  return (
    <div className="w-full relative h-screen overflow-hidden">
      <Image
        src={building}
        alt="building"
        className="w-full opacity-25 -scale-x-100 md:mt-0 mt-[35%]"
      />
      <LandingCircle />
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
      <Content />
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

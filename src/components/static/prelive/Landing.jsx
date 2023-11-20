import Image from "next/image";
import building from "../../../../public/svg/building.svg";
import LandingCircle from "../upcoming/LandingCircle.jsx";
import blackBuilding from "../../../../public/svg/blackbuilding.svg";
import Content from "./Content.jsx";

const Landing = () => {
  return (
    <div className="w-full relative overflow-hidden max-h-screen">
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
    </div>
  );
};

export default Landing;

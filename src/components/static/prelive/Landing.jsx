import Image from "next/image";
import building from "../../../../public/svg/building.svg";
import LandingCircle from "../upcoming/LandingCircle.jsx";
import blackBuilding from "../../../../public/svg/blackbuilding.svg";
import Content from "./Content.jsx";
import { Parallax } from "react-scroll-parallax";

const Landing = () => {
  return (
    <div className="w-full relative overflow-hidden max-h-screen">
      <div className="block md:hidden w-full relative overflow-hidden max-h-screen">
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
      </div>
      <div className="hidden md:block w-full relative overflow-hidden max-h-screen">
        <Parallax speed={-70} translateX={[-10, 10]}>
          <Image
            src={building}
            alt="building"
            className="w-full opacity-25 -scale-x-100 md:mt-0 mt-[35%]"
          />
        </Parallax>
        <Parallax speed={-50} translateX={[2, -2]} className="mt-32">
          <LandingCircle />
          <Image
            src={building}
            alt="building"
            className="w-full relative -mt-[35%] md:-mt-[75%]"
          />
        </Parallax>
        <Parallax speed={0} translateX={[-2, 2]}>
          <Image
            src={blackBuilding}
            alt="building"
            className="w-full relative md:-mt-[50%] -mt-[35%] scale-105"
          />
        </Parallax>
      </div>
      <Content />
    </div>
  );
};

export default Landing;

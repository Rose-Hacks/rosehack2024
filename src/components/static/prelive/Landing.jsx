import Image from "next/image";
import building from "../../../../public/svg/building.svg";
import blackBuilding from "../../../../public/svg/blackbuilding.svg";
import Content from "./Content.jsx";
import LandingCircle from "../upcoming/LandingCircle";

const Landing = () => {
  return (
    <div className="w-full relative overflow-hidden min-h-[90vh] md:min-h-screen flex items-center justify-center">
      <Image
        src={building}
        alt="building"
        className="absolute w-full opacity-25 bottom-0 h-3/4 md:h-full object-cover"
      />
      <LandingCircle />
      <Image
        src={blackBuilding}
        alt="building"
        className="absolute w-full bottom-0 h-3/4 md:h-full object-cover"
      />
      <Navigation />
      <Content />
    </div>
  );
};

export default Landing;

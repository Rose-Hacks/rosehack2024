import { sponsorCompanyLogos } from "../../../data/static/Sponsors";
import { sponsorUCRLogos } from "../../../data/static/Sponsors";
import Title from "./Title";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="w-2/3 flex flex-col justify-center items-center">
      <Title label={"Sponsors"} />
      <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-none md:grid-cols-4 gap-12 place-items-center">
        {sponsorCompanyLogos.map((item, index) => (
          <Image key={index} src={item.logo} />
        ))}
      </div>
      <div className="grid grid-cols-3 md:w-2/3 gap-12 place-items-center mt-5">
        {sponsorUCRLogos.map((item, index) => (
          <Image key={index} src={item.logo} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;

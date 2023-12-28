import { sponsorLogos } from "../../../data/static/Sponsors";
import Title from "./Title";
import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="w-2/3 flex flex-col justify-center items-center">
      <Title label={"Sponsors"} />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
        {sponsorLogos.map((item, index) => (
          <Image key={index} src={item.logo} />
        ))}
      </div>
    </div>
  );
};

export default Sponsors;

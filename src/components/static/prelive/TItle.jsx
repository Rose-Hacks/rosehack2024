import Image from "next/image";
import flowShape from "../../../../public/svg/flow-shape.svg";

const Title = ({ label }) => {
  return (
    <div className="fixed">
      <Image
        src={flowShape}
        alt="building"
        className="w-full opacity-25 -scale-x-100 md:mt-0 mt-[35%]"
      />
      <div className="text-white text-center border-2 border-[#3C5567] rounded-sm backdrop-blur-sm">
        <p className="m-2 text-4xl font-montserrat">{label}</p>
      </div>
      {/* svg arrow */}
    </div>
  );
};

export default Title;

import Image from "next/image";
import doubleTriangle from "../../../../public/svg/doubleTriangle.svg";
import triangle from "../../../../public/svg/triangle.svg";

const Title = ({ label }) => {
  return (
    <div className="flex flex-row w-full justify-center">
      <Image
        src={doubleTriangle}
        alt="trangle arrow"
        width={"70"}
        className="mt-2"
      />
      <Image src={triangle} />

      <div className="text-white text-center border-2 border-[#3C5567] rounded-sm backdrop-blur-sm my-auto mx-4">
        <p className="m-2 text-6xl font-montserrat">{label}</p>
      </div>

      <Image src={triangle} className="-scale-x-100" />
      <Image
        src={doubleTriangle}
        alt="trangle arrow"
        width="70"
        className="-scale-x-100 mt-2"
      />
    </div>
  );
};

export default Title;

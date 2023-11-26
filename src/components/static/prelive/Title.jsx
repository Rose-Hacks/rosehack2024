import Image from "next/image";
import doubleTriangle from "../../../../public/svg/doubleTriangle.svg";
import triangle from "../../../../public/svg/triangle.svg";

const Title = ({ label }) => {
  return (
    <div className="flex w-full justify-center items-center">
      <Image
        src={doubleTriangle}
        alt="trangle arrow"
        width={"70"}
        className="mt-2"
      />
      <Image src={triangle} />
      <div className="m-0 text-4xl font-montserrat text-white text-center mx-4">
        {label}
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

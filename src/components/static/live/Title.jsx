import Image from "next/image";
import doubleTriangle from "../../../../public/svg/doubleTriangle.svg";

const Title = ({ label }) => {
  return (
    <div className="flex w-full justify-center items-center my-5">
      <Image
        src={doubleTriangle}
        alt="trangle arrow"
        className="mt-2 w-12 md:w-16"
      />
      <div className="m-0 text-3xl md:text-4xl font-montserrat text-white text-center mx-3 md:mx-4">
        {label}
      </div>
      <Image
        src={doubleTriangle}
        alt="trangle arrow"
        className="-scale-x-100 mt-2 w-12 md:w-16"
      />
    </div>
  );
};

export default Title;

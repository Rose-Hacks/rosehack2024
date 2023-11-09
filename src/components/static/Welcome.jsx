import Image from "next/image";
import bg from "../../../public/svg/welcome/bg.svg";

const Welcome = () => {
  return (
    <div className="relative w-fit flex items-center justify-center">
      <Image src={bg} className="w-3/5" />
      <div className="absolute w-1/5 text-white text-center text-xl font-montserrat">
        Rose Hack welcomes both undergraduate and high school students for a
        lively weekend filled with innovation, discovery, networking,
        mentorship, and so much more!
      </div>
    </div>
  );
};

export default Welcome;

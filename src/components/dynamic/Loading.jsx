import Image from "next/image";
import { TbLoader3 } from "react-icons/tb";
import img from "../../../public/svg/pink-robot.svg";

const Loading = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center font-advent">
      <Image src={img} className="h-1/4 animate-bounce-2s mb-2" />
      <p className="text-3xl font-bold text-white">LOADING...</p>
      <TbLoader3 className="animate-spin text-rosehack-pink-100 text-4xl " />
    </div>
  );
};

export default Loading;

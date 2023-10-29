import img from "../../public/svg/blue-robot.svg";
import Image from "next/image";
import Title from "@/components/static/prelive/TItle";

const error = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center fixed bg-blur-h">
      <Image src={img} className="h-1/4 animate-bounce-2s mb-2" />
      <p className="text-center text-9xl font-bold text-white font-orbitron">
        404
      </p>
      <div className="text-center text-lg md:text-2xl font-light text-rosehack-blue font-montserrat">
        Page Not Found
      </div>
      <p className="text-center text-sm md:text-lg text-rosehack-blue font-montserrat">
        The page you are looking for does not seem to exist.
      </p>
      <Title label="Meet The Team" />
    </div>
  );
};

export default error;

import Image from "next/image";
import circle1 from "../../../../public/svg/about/circle1.svg";
import circle2 from "../../../../public/svg/about/circle2.svg";

const Circle = () => {
  return (
    <div className="relative">
      <Image src={circle1} className="animate-[spin_5s_ease-in-out_infinite]" />
      <Image
        src={circle2}
        className="animate-[spin_8s_linear_infinite] absolute inset-0"
      />
    </div>
  );
};

export default Circle;

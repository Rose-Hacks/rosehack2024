import flow from "../../../../public/svg/about/flow.svg";
import Image from "next/image";
import { LiaSquareFullSolid } from "react-icons/lia";
import Circle from "./Circle";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-black w-full flex flex-col items-center pt-10">
      <div className="relative w-9/12 md:w-3/5 lg:w-2/5">
        <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2 w-fit h-fit">
          <Circle />
        </div>
        <div className="relative w-full text-white overflow-hidden bg-about p-3">
          <div className="bg-black/90 backdrop-blur-md p-4">
            <div className="font-advent text-2xl md:text-3xl">About Us</div>
            <div className="flex items-center">
              <div className="h-[1px] bg-white w-1/4" />
              <LiaSquareFullSolid className="rotate-45 text-xs -ml-2" />
            </div>
            <div className="text-xs md:text-base font-montserrat my-3">
              Rose Hack is UC Riverside&apos;s 24-hour hackathon, one of the few
              women-centric hackathons in California! Founded by the female
              leaders of the Association for Computing Machinery (ACM-W) and the
              Society of Women Engineers (SWE).
            </div>
            <div className="flex items-center justify-center">
              <div className="h-[1px] bg-white w-3/5" />
              <LiaSquareFullSolid className="rotate-45 text-xs -ml-2" />
            </div>
            <div className="text-xs md:text-base font-montserrat my-3">
              Rose Hack&apos;s mission is to encourage individuals from
              underrepresented groups in STEM to gain experience, create strong
              networks, and build amazing projects through their shared passions
              in Science and Technology.
            </div>
          </div>
        </div>
      </div>
      <Image src={flow} className="w-full" />
    </div>
  );
};

export default About;

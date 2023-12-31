import Link from "@/components/static/Link.jsx";
import Image from "next/image";
import PinkRobot from "../../../../../public/svg/volunteer-robot.svg";
import bg from "../../../../../public/svg/volunteer-bg.svg";

const Volunteer = () => {
  return (
    <div className="font-montserrat flex text-white flex-col md:flex-row w-9/12 md:w-8/12 2xl:w-1/2 justify-between relative">
      <Image className="absolute left-0 bottom-0 w-1/3 md:w-1/6" src={bg} />
      <div className="w-full md:w-3/4 flex flex-col items-center md:items-end">
        <div className="text-2xl md:text-3xl w-fit pb-2">
          Become a Volunteer
        </div>
        {/* desktop view->text-center/text-left w breakpoints doesn't work */}
        <p className="hidden md:inline text-lg font-extralight text-right">
          Are you ready to be a driving force behind groundbreaking ideas and
          female empowerment in STEM? Look no further! Rose Hack, the premier
          women-centric hackathon in the Inland Empire, is calling on
          enthusiastic individuals to join us as volunteers for an unforgettable
          experience on January 20th-21st, 2024!
        </p>
        {/* mobile view->  text-center/text-left w breakpoints doesn't work*/}
        <p className="md:hidden text-sm text-center font-extralight">
          Are you ready to be a driving force behind groundbreaking ideas and
          female empowerment in STEM? Look no further! Rose Hack, the premier
          women-centric hackathon in the Inland Empire, is calling on
          enthusiastic individuals to join us as volunteers for an unforgettable
          experience on January 20th-21st, 2024!
        </p>
        <div className="flex pt-2 justify-center md:justify-end">
          <Link
            text="volunteer"
            link="/form/volunteer"
            fromColor="from-[#C44B8C]"
            toColor="to-[#E77FF8]"
          />
        </div>
      </div>
      <Image className="z-10 hidden md:block w-1/2 md:w-1/4" src={PinkRobot} />
    </div>
  );
};

export default Volunteer;

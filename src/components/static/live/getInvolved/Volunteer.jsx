import Link from "src/components/static/Link.jsx";
import Image from "next/image";
import PinkRobot from "public/svg/pink-robot.svg";
const Volunteer = () => {
  return (
    <div className="font-montserrat items-center flex-col-reverse text-hackathon-tags-white flex md:flex-row w-10/12">
      <div className="flex-col text-right">
        <div className="hidden md:inline text-2xl">Become a Volunteer</div>
        <div className="md:pt-3 md:pl-10">
          <div className="flex items-center md:items-baseline">
            <div className="md:w-3/4"></div>
            {/* desktop view-> text-center/text-left w breakpoints doesn't work*/}
            <p className="hidden md:inline text-lg m-0 items-start text-right px-0 pt-0 pr-0 pb-3">
              Are you ready to be a driving force behind groundbreaking ideas
              and female empowerment in STEM? Look no further! Rose Hack, the
              premier women-centric hackathon in the Inland Empire, is calling
              on enthusiastic individuals to join us as volunteers for an
              unforgettable experience on January 20th-21st, 2024!
            </p>
            {/* mobile view-> text-center/text-left w breakpoints doesn't work*/}
            <p className="md:hidden text-lg m-0 items-start text-center px-0 pt-0 pr-0 pb-3">
              Are you ready to be a driving force behind groundbreaking ideas
              and female empowerment in STEM? Look no further! Rose Hack, the
              premier women-centric hackathon in the Inland Empire, is calling
              on enthusiastic individuals to join us as volunteers for an
              unforgettable experience on January 20th-21st, 2024!
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Link
              text="volunteer"
              link="/form/volunteer"
              fromColor="from-[#C44B8C]"
              toColor="to-[#E77FF8]"
            />
          </div>
        </div>
      </div>
      <Image className="w-1/3 animate-bounce-2s" src={PinkRobot} />
      <div className="md:hidden pb-4 inline text-2xl">Become a Volunteer</div>
    </div>
  );
};

export default Volunteer;

import Link from "@/components/static/Link.jsx";
import BlueRobot from "../../../../../public/svg/mentor-robot.svg";
import bg from "../../../../../public/svg/mentor-bg.svg";
import Image from "next/image";
const Volunteer = () => {
  return (
    <div className="font-montserrat flex text-white flex-col md:flex-row w-9/12 md:w-7/12 justify-between relative">
      <Image
        className="absolute right-0 top-0 -translate-y-1/2 w-1/3 md:w-1/6"
        src={bg}
      />
      <Image
        className="z-10 relative hidden md:block w-1/2 md:w-1/4"
        src={BlueRobot}
      />
      <div className="z-10 relative w-full md:w-3/4 flex flex-col items-center md:items-start">
        <div className="text-2xl md:text-3xl w-fit pb-2">Become a Mentor</div>
        {/* desktop view->text-center/text-left w breakpoints doesn't work */}
        <p className="hidden md:inline text-lg font-extralight">
          Are you passionate about engineering, a seasoned coder, or an aspiring
          industry professional eager to share your knowledge? Here&apos;s your
          chance to inspire the next generation of people, especially women in
          STEM and underrepresented groups, looking to be just like you! We at
          Rose Hack are on the lookout for passionate mentors to guide and
          support participants! If you are interested in helping us, please fill
          out the form below!
        </p>
        {/* mobile view->  text-center/text-left w breakpoints doesn't work*/}
        <p className="md:hidden text-sm text-center font-extralight">
          Are you passionate about engineering, a seasoned coder, or an aspiring
          industry professional eager to share your knowledge? Here&apos;s your
          chance to inspire the next generation of people, especially women in
          STEM and underrepresented groups, looking to be just like you! We at
          Rose Hack are on the lookout for passionate mentors to guide and
          support participants! If you are interested in helping us, please fill
          out the form below!
        </p>
        <div className="flex pt-2 justify-center md:justify-start">
          <Link
            text="mentor"
            link="/form/mentor"
            fromColor="from-[#4F4BC4]"
            toColor="to-[#7FD3F8]"
          />
        </div>
      </div>
    </div>
  );
};

export default Volunteer;

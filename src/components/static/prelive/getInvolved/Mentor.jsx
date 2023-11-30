import Link from "src/components/static/Link.jsx";
import BlueRobot from "public/svg/blue-robot.svg";
import Image from "next/image";
const Volunteer = () => {
  return (
    <div className="font-montserrat items-center flex text-hackathon-tags-white flex-col md:flex-row w-10/12">
      <div className="md:hidden pb-4 text-2xl">Become a Mentor</div>
      <Image className="w-1/3 animate-bounce-2s" src={BlueRobot} />
      <div className="pt-1 self-start flex-col  text-left">
        <div className="hidden md:inline text-2xl">Become a Mentor</div>
        <div className="md:pt-3 md:pl-10 md:pr-20">
          {/* desktop view->text-center/text-left w breakpoints doesn't work */}
          <p className="hidden md:inline text-lg md:w-10/12 m-0 px-0 pt-0 pb-10">
            Are you passionate about engineering, a seasoned coder, or an
            aspiring industry professional eager to share your knowledge?
            Here&apos;s your chance to inspire the next generation of people,
            especially women in STEM and underrepresented groups, looking to be
            just like you! We at Rose Hack are on the lookout for passionate
            mentors to guide and support participants! If you are interested in
            helping us, please fill out the form below!
          </p>
          {/* mobile view-> text-center/text-left w breakpoints doesn't work*/}
          <p className="md:hidden text-center text-lg md:w-10/12 m-0 px-0 pt-0">
            Are you passionate about engineering, a seasoned coder, or an
            aspiring industry professional eager to share your knowledge?
            Here&apos;s your chance to inspire the next generation of people,
            especially women in STEM and underrepresented groups, looking to be
            just like you! We at Rose Hack are on the lookout for passionate
            mentors to guide and support participants! If you are interested in
            helping us, please fill out the form below!
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
    </div>
  );
};

export default Volunteer;

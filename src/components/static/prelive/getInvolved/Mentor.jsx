import Link from "src/components/static/Link.jsx";
import BlueRobot from "public/svg/blue-robot.svg";
import Image from "next/image";
const Volunteer = () => {
  return (
    <div className="font-montserrat flex w-10/12">
      <Image className="w-1/3 animate-bounce-2s" src={BlueRobot} />
      <div className="pt-1 self-start flex-col text-hackathon-tags-white text-left">
        <div className="text-2xl">Become a Mentor</div>
        <div className="pt-3 pl-10 pr-20">
          <p className="text-lg w-10/12 m-0 px-0 pt-0 pb-3">
            Are you passionate about engineering, a seasoned coder, or an
            aspiring industry professional eager to share your knowledge?
            Here&apos;s your chance to inspire the next generation of people,
            especially women in STEM and underrepresented groups, looking to be
            just like you! We at Rose Hack are on the lookout for passionate
            mentors to guide and support participants! If you are interested in
            helping us, please fill out the form below!
          </p>
          <div className="flex justify-start">
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

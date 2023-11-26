import Link from "src/components/static/Link.jsx";
import BlueRobot from "public/svg/blue-robot.svg";
import Image from "next/image";
const Volunteer = () => {
  return (
    <div className="font-montserrat flex">
      <Image className="w-1/3 animate-bounce-2s" src={BlueRobot} />
      <div className="pt-1 self-start flex-col text-hackathon-tags-white text-left">
        <div className="text-5xl">Become a Mentor</div>
        <div className="pt-3 pl-10 pr-20">
          <p className="text-2xl w-10/12 m-0 px-0 pt-0 pb-3">
            In cursus turpis massa tincidunt dui ut ornare lectus sit. Viverra
            vitae congue eu consequat ac felis.
          </p>
          <div className="flex justify-start">
            <Link
              text="register"
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

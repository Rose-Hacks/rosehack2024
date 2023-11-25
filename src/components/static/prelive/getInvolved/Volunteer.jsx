import Image from "next/image";
import Link from "src/components/static/Link.jsx";
import PinkRobot from "public/svg/pink-robot.svg";

const Volunteer = () => {
  return (
    <div className="font-montserrat flex">
      <div className="mt-16 flex-col text-hackathon-tags-white text-right">
        <div className="text-5xl">Become a Volunteer</div>
        <div className="pt-3 pl-10">
          <div className="flex">
            <div className="w-3/4"></div>
            <p className="text-2xl m-0 text-right px-0 pt-0 pr-0 pb-3">
              In cursus turpis massa tincidunt dui ut ornare lectus sit. Viverra
              vitae congue eu consequat ac felis.
            </p>
          </div>
          <div className="flex justify-end">
            <Link
              text="register"
              link="/form/volunteer"
              fromColor="from-[#C44B8C]"
              toColor="to-[#E77FF8]"
            />
          </div>
        </div>
      </div>
      <Image className="w-1/3 animate-bounce-2s" src={PinkRobot} />
    </div>
  );
};

export default Volunteer;

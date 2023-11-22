import Image from "next/image";
import LOGO from "../../../public/LOGO.svg";

const Navigation = () => {
  return (
    <div className="flex flex-row bg-rosehack-teal h-1/6 align-middle">
      <Image src={LOGO} alt="logo" width={"70"} height={"70"} />
      Home About Team Judges FAQ
    </div>
  );
};

export default Navigation;

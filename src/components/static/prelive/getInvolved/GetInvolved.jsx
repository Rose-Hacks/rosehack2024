import Mentor from "./Mentor";
import Volunteer from "./Volunteer";
import Title from "../Title";

const GetInvolved = () => {
  return (
    <div className="w-full flex flex-col gap-20">
      <Title label={"Get Involved"} />
      <Mentor />
      <Volunteer />
    </div>
  );
};
export default GetInvolved;

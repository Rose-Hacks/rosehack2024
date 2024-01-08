import Title from "../Title";
import { judges } from "@/data/static/Judges.js";
import Profile from "../Profile";
import Row from "react-bootstrap/Row";

const Judges = () => {
  return (
    <div className="flex-col flex items-center justify-center w-5/6">
      <Title label="Judges" />
      <Row className="items-center justify-center text-white w-full">
        {judges.map((item, index) => (
          <Profile
            key={index}
            image={item.image}
            name={item.name}
            position={item.position}
          />
        ))}
      </Row>
    </div>
  );
};

export default Judges;

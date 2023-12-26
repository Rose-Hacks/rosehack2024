import Title from "../Title";
import { boardMembers } from "../../../../data/static/Boards.js";
import Profile from "../Profile";
import Row from "react-bootstrap/Row";
const Boards = () => {
  return (
    <div className="flex-col flex items-center justify-center w-9/12">
      <Title label="Team" />
      <Row className="items-center justify-center text-white w-full">
        {boardMembers[0].map((item, index) => (
          <Profile
            key={index}
            image={item.image}
            name={item.name}
            position={item.position}
          />
        ))}
      </Row>
      <Row className="items-center justify-center text-white w-full">
        {boardMembers[1].map((item, index) => (
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

export default Boards;

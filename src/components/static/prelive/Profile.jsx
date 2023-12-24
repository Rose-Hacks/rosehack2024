import Image from "next/image";
import Col from "react-bootstrap/Col";

const Board = ({ position, name, image }) => {
  return (
    <Col
      xs={6}
      md={3}
      lg={2}
      className="flex flex-col items-center justify-center text-white p-4 justify-self-center self-start"
    >
      <Image
        src={image}
        className="rounded-full w-40 object-cover aspect-square"
      />
      <div className="text-md md:text-xl font-bold mt-1 whitespace-nowrap">
        {name}
      </div>
      <div className="text-xs lg:text-base text-center">{position}</div>
    </Col>
  );
};

export default Board;

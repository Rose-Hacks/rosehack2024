import Image from "next/image";
import Col from "react-bootstrap/Col";

const Board = ({ position, name, image, sm }) => {
  return (
    <Col
      xs={6}
      md={4}
      lg={3}
      className="flex flex-col items-center justify-center text-white p-4 justify-self-center self-start"
    >
      <Image
        src={image}
        className="rounded-full w-40 object-cover aspect-square"
      />
      <div className="text-md md:text-xl font-bold mt-1 whitespace-nowrap">
        {name}
      </div>
      <div
        className={`${
          sm && "hidden lg:block"
        } text-xs md:text-sm lg:text-base font-semibold text-center`}
      >
        {position}
      </div>
      {sm && (
        <div className="block lg:hidden text-xs md:text-sm lg:text-base font-semibold">
          {sm}
        </div>
      )}
    </Col>
  );
};

export default Board;

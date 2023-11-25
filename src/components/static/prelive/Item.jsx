import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Accordion from "react-bootstrap/Accordion";
import { useState } from "react";

const Item = ({ question, answer, index }) => {
  const [state, setState] = useState(false);

  return (
    <Accordion.Item
      eventKey={index}
      className="font-montserrat !text-white bg-transparent !border-none"
    >
      <Accordion.Button
        className="after:!bg-none  !text-white !bg-transparent"
        onClick={() => setState(!state)}
      >
        <div className="flex justify-between items-center w-full">
          <div>{question}</div>
          <MdKeyboardDoubleArrowUp
            className={`${!state && "rotate-180"} duration-200 ml-2 text-2xl`}
          />
        </div>
      </Accordion.Button>
      <Accordion.Body>{answer}</Accordion.Body>
    </Accordion.Item>
  );
};

export default Item;

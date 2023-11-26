import { QUESTIONS } from "@/data/static/FAQ";
import Accordion from "react-bootstrap/Accordion";
import Item from "./Item";

const FAQ = () => {
  return (
    <div className="flex justify-center items-center bg-black/50">
      <Accordion className="w-1/2" alwaysOpen>
        {QUESTIONS.map(({ question, answer }, index) => (
          <Item question={question} answer={answer} key={index} index={index} />
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;

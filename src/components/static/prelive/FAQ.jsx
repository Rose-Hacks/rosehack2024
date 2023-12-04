import { QUESTIONS } from "@/data/static/FAQ";
import Accordion from "react-bootstrap/Accordion";
import Item from "./Item";
import Title from "./Title";

const FAQ = () => {
  return (
    <div id="faq" className="flex justify-center items-center flex-col w-1/2">
      <Title label="FAQ" />
      <Accordion className="w-full bg-black/30 mt-4" alwaysOpen>
        {QUESTIONS.map(({ question, answer }, index) => (
          <Item question={question} answer={answer} key={index} index={index} />
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;

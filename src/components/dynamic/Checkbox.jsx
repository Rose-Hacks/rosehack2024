import { BsCheckLg } from "react-icons/bs";

const Checkbox = ({ toggle, onClick = () => {}, text = "" }) => {
  return (
    <div
      className="flex items-center hover:cursor-pointer w-fit"
      onClick={onClick}
      data-cy="checkbox"
    >
      <div
        data-cy="checkbox-bg"
        className="w-4 h-4 rounded-0 bg-transparent flex items-center justify-center border-[1px] border-white"
      >
        <BsCheckLg
          data-cy="checkmark"
          className={`${
            toggle ? "text-white" : "text-transparent"
          } text-lg duration-100`}
        />
      </div>
      {text && <p className="pl-3 my-0 pt-0">{text}</p>}
    </div>
  );
};

export default Checkbox;

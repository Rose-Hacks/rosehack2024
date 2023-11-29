import { RiArrowDownSLine } from "react-icons/ri";
import { useState, useEffect, useRef } from "react";

const Select = ({
  items,
  user,
  field,
  setUser,
  placeholder,
  title,
  editable = true,
  required,
  searchable = false,
}) => {
  const [options, setOptions] = useState(items);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const ref = useRef(null);
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOptions(
        options.map((option) => ({
          ...option,
          hidden: !option.name.toLowerCase().includes(input.toLowerCase()),
        }))
      );
    }, 850);

    return () => clearTimeout(timeout);
  }, [input]);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <p className="mb-1 font-semibold">
        {title}
        {required && <span className="text-rosehack-pink-200">*</span>}
      </p>
      <div className="w-full m-0 relative" data-cy="select" ref={ref}>
        {editable ? (
          <button
            onClick={() => setShow(!show)}
            className={`${
              user[field] ? "text-black" : "text-hackathon-gray-200"
            } bg-transparent flex items-center justify-between w-full border-b-[1px] border-white pb-1`}
            data-cy="select-toggle"
          >
            {user[field] || placeholder}
            <RiArrowDownSLine
              className={`${show && "rotate-180"} duration-300 text-white`}
              data-cy="select-arrow"
            />
          </button>
        ) : (
          <div
            className={`placeholder:text-hackathon-gray-200 ${
              user[field] ? "text-white" : "!text-hackathon-placeholder"
            } w-full pl-3 !border-x-0 !border-t-0 ${
              editable ? "!border-b-2" : "border-0"
            } !rounded-none !border-white`}
          >
            {user[field] || placeholder}
          </div>
        )}
        {editable && show && (
          <div
            className="w-full absolute z-10 !bg-gray-600 !border-none !rounded-none !p-0 overflow-y-auto max-h-[35vh]"
            data-cy="select-menu"
          >
            {searchable && (
              <input
                value={input}
                autoFocus
                className="ml-3 my-1 mt-2 w-11/12 ring-0 outline-none px-2 py-1 bg-gray-500 text-white"
                placeholder="search"
                onChange={handleInput}
              />
            )}
            {options
              .filter((opt) => !opt.hidden)
              .map((option, index) => (
                <div
                  className="hover:!bg-rosehack-blue/30 overflow-hidden"
                  key={index}
                  onClick={() => {
                    setUser({ ...user, [field]: option.name });
                    setShow(false);
                  }}
                >
                  {option.name}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;

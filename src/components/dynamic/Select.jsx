import Dropdown from "react-bootstrap/Dropdown";
import { useState, useEffect } from "react";

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

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <p className="mb-1 font-semibold">
        {title}
        {required && <span className="text-rosehack-pink-200">*</span>}
      </p>
      <Dropdown
        show={show}
        className="w-full m-0"
        onToggle={() => setShow(!show)}
        autoClose={true}
        data-cy="select"
      >
        {editable ? (
          <Dropdown.Toggle
            as={Toggle}
            option={user[field]}
            placeholder={placeholder}
            show={show}
          />
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
                  onClick={() => setUser({ ...user, [field]: option.name })}
                >
                  {option.name}
                </div>
              ))}
          </div>
        )}
      </Dropdown>
    </div>
  );
};

export default Select;

import { COMMITTEES } from "../../../data/static/Committees";

const Committees = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-6 md:gap-10">
      <p className="text-white text-3xl font-bold mt-4">Committees</p>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {Object.entries(COMMITTEES).map(([key, values], index) => (
          <div
            className="text-white text-center flex flex-col items-center"
            key={index}
          >
            <p className="bg-gradient-to-r text-transparent from-rosehack-blue to-rosehack-pink-200 w-fit bg-clip-text text-xl font-bold">
              {key}
            </p>
            {values.map((name, index) => (
              <p key={index}>{name}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;

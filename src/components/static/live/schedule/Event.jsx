const colors = {
  event: {
    bg: "bg-rosehack-pink-200",
    text: "text-rosehack-pink-200",
    border: "border-rosehack-pink-200",
  },
  workshop: {
    bg: "bg-rosehack-teal",
    text: "text-rosehack-teal",
    border: "border-rosehack-teal",
  },
  general: { bg: "bg-white", text: "text-white", border: "border-white" },
  food: {
    bg: "bg-purple-300",
    text: "text-purple-300",
    border: "border-purple-300",
  },
};

const Event = ({ event }) => {
  const color = colors[event.category] ?? colors['general'];

  return (
    <div className="w-full">
      <div className="flex items-center">
        <div className={`${color.text} font-bold font-montserrat text-sm mr-1`}>
          {event.category.toUpperCase()}
        </div>
        <div className={`${color.bg} h-3 w-2 mr-1`} />
        <div className={`${color.bg} h-3 w-2 mr-1`} />
        <div className={`${color.bg} h-3 w-2 mr-1`} />
      </div>
      <div
        className={`${
          event.start < new Date()
            ? event.end > new Date()
              ? "bg-white/30 animate-bounce"
              : "opacity-70"
            : "bg-white/20"
        } py-2 relative w-full grid grid-cols-12 items-center justify-center ${
          color.text
        } border-[1px] ${color.border}`}
      >
        <div className="absolute left-0 bottom-0">
          <div className="flex gap-1">
            <div className={`${color.bg} h-2 w-10`} />
            <div className={`${color.bg} h-2 w-1`} />
          </div>
        </div>
        <div className="absolute top-0 right-0 flex">
          <div
            className={`${color.border} h-3 w-2 border-[1px] mt-1 mr-1 -skew-x-12`}
          />
          <div
            className={`${color.border} h-3 w-2 border-[1px] mt-1 mr-1 -skew-x-12`}
          />
          <div
            className={`${color.border} h-3 w-2 border-[1px] mt-1 mr-1 -skew-x-12`}
          />
        </div>
        <div
          className={`col-span-3 md:col-span-1 font-orbitron border-r-[1px] ${color.border} h-full flex flex-col items-center justify-center text-center text-xs md:text-base`}
        >
          {event.start.getHours() === 12 ? 12 : event.start.getHours() % 12}:
          {event.start.getMinutes() < 10 && "0"}
          {event.start.getMinutes()}{" "}
          {event.start.getHours() >= 12 ? "PM " : "AM "}
        </div>
        <div
          className={`col-span-5 md:col-span-2 px-2 items-center justify-center text-center font-advent text-base md:text-xl flex h-full border-r-[1px] ${color.border}`}
        >
          {event.summary}
        </div>
        <div
          className={`hidden md:flex col-span-8 py-3 px-2 items-center justify-center text-center font-montserrat text-base h-full border-r-[1px] ${color.border}`}
        >
          {event.description}
        </div>
        <div className="col-span-4 md:col-span-1 p-2">
          <div
            className={`text-xs md:text-base flex text-center w-full items-center justify-center font-advent text-black ${color.bg} py-1`}
          >
            {event.location}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;

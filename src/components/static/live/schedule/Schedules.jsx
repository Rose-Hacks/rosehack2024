"use client";
import { useEffect, useState } from "react";
import Title from "../Title";
import Event from "./Event";
import { api } from "@/utils/api";
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const Schedules = () => {
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const dates = [1, 2, 3, 4, 5, 6, 0];

  useEffect(() => {
    api({
      method: "GET",
      url: `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`,
    }).then(async (response) => {
      let selected = null;
      const items = response.items.map((item) => {
        item.start = new Date(item.start.dateTime);
        item.end = new Date(item.end.dateTime);
        item.day = item.start.getDay();
        item.category =
          item.description?.split("\n")[0]?.split("#")[1] || "general";
        item.description = item.description?.split("\n")[1];
        if (!selected && item.start >= new Date())
          selected = item.start.getDay();
        return item;
      });
      setSelectedDay(selected);
      setEvents(items);
    });
  }, []);
  return (
    <div className="w-9/12 items-center justify-center flex flex-col gap-3">
      <Title label="Schedule" />
      <div className="text-sm md:text-base font-montserrat text-white font-light">
        Pacific Standard Time (PST)
      </div>
      <div className="flex text-white bg-white/10 border-[1px] w-11/12 md:9/12 lg:w-1/2">
        {dates
          .filter((date) => events.some((event) => event.day === date))
          .map((date, index) => (
            <div
              className={`text-white font-montserrat font-light text-sm md:text-lg items-center justify-center flex flex-grow cursor-pointer border-[1px] border-transparent hover:bg-white/10 duration-200 ${
                selectedDay === date && "bg-white/20 border-white"
              }`}
              onClick={() => setSelectedDay(date)}
              key={index}
            >
              {days[date]}
            </div>
          ))}
      </div>
      {events
        .filter((event) => event.day === selectedDay)
        .map((event, index) => (
          <Event event={event} key={index} />
        ))}
    </div>
  );
};

export default Schedules;

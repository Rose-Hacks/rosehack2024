"use client";
import { useEffect, useState } from "react";
import Title from "../Title";
import axios from "axios";
import Event from "./Event";
const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const Schedules = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState("ALL");
  const dates = ["ALL", new Date("2024-1-20"), new Date("2024-1-21")];

  useEffect(() => {
    let date;
    let showDate;
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&singleEvents=true&orderBy=startTime`
      )
      .then((response) => {
        const items = response.data.items.map((item) => {
          if (date === new Date(item.start.dateTime).getDate())
            showDate = false;
          else {
            date = new Date(item.start.dateTime).getDate();
            showDate = true;
          }
          item.start = new Date(item.start.dateTime);
          item.end = new Date(item.end.dateTime);
          item.showDate = showDate;

          item.category = item.description?.split("\n")[0]?.split("#")[1];
          item.description = item.description?.split("\n")[1];

          return item;
        });
        setEvents(items);
      });
  }, []);
  return (
    <div className="w-9/12 items-center justify-center flex flex-col gap-3">
      <Title label="Schedule" />
      <div className="text-sm md:text-base font-montserrat text-white font-light">
        Pacific Standard Time (PST)
      </div>
      <div className="flex text-white bg-white/10 border-[1px]">
        {dates.map((date, index) => (
          <div
            className={`text-white font-montserrat font-light text-sm md:text-lg px-6 cursor-pointer border-[1px] border-transparent hover:bg-white/10 duration-200 ${
              (selectedDate === date ||
                (date !== "ALL" &&
                  selectedDate !== "ALL" &&
                  selectedDate.getDate() === date.getDate())) &&
              "bg-white/20 border-white"
            }`}
            onClick={() => setSelectedDate(date)}
            key={index}
          >
            {date === "ALL" ? "ALL" : days[date.getDay()]}
          </div>
        ))}
      </div>
      {events
        .filter(
          (event) =>
            selectedDate === "ALL" ||
            event.start.getDate() === selectedDate.getDate()
        )
        .map((event, index) => (
          <Event event={event} key={index} date={event.showDate} />
        ))}
    </div>
  );
};

export default Schedules;

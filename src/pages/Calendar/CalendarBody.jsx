import "./CalendarBody.css";
import { useState, useEffect } from "react";
import { getEvents, organizeByDay, organizePublicHolidays } from "../../javascript/getEvents";
import CalendarDay from "./CalendarDay";

function CalendarTime({ height, children }) {
  return (
    <div className="calendar-time" style={{ height: `${height}px` }}>
      {children}
    </div>
  );
}

function TimeSection({ height }) {
  let hourheight = height / 24;
  return (
    <div className="time-sections">
      <CalendarTime height={hourheight}>12:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>1:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>2:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>3:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>4:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>5:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>6:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>7:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>8:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>9:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>10:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>11:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>12:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>1:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>2:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>3:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>4:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>5:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>6:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>7:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>8:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>9:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>10:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>11:00 PM</CalendarTime>
    </div>
  );
}

function CalendarBody({ events, isMobile, currentDay }) {
  const [calendarHeight, setCalendarHeight] = useState(100 * 24);
  const [PublicHolidays, setPublicHolidays] = useState({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });
  const [eventsByDay, setEventsByDay] = useState({
    Sunday: {},
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {}
  });

  useEffect(() => {
    let events = getEvents();
    setEventsByDay(organizeByDay(events));
    const url = "https://date.nager.at/api/v3/PublicHolidays/" + new Date().getFullYear() + "/US";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPublicHolidays(organizePublicHolidays(data));
      })
  }, []);

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return (
    <div className="calendar-body">
      <div className="calendar-scroll">
        <TimeSection height={calendarHeight} />
        <div className="calendar">
          {daysOfWeek.map((day, index) => (
            <CalendarDay
              key={day}
              height={calendarHeight}
              day={eventsByDay[day]}
              holidays={PublicHolidays[day]}
              className={isMobile && index !== currentDay.getDay() ? "calendar-day hidden" : "calendar-day current-day"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarBody;

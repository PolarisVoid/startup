import "./CalendarBody.css";
import { useState, useEffect } from "react";
import { getEvents, organizeByDay, organizePublicHolidays } from "../../javascript/getEvents";

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

function CalendarEvent({
  height,
  width,
  top,
  left,
  background,
  border,
  event,
}) {
  const divStyle = {
    height: `${height}px`,
    width: `${width}%`,
    top: `${top}px`,
    left: `${left}%`,
    backgroundColor: background,
    borderColor: border,
  };
  return (
    <div className="calendar-event" style={divStyle}>
      <button className="calendar-event-button" onClick={() => { }}>
        <div className="event-header">
          <h3>{event.name}</h3>
        </div>
      </button>
    </div>
  );
}

function CalendarDay({ height, day, holidays, events, className }) {
  let hourheight = height / 24;  // Height per hour (since there are 24 hours in a day)
  events = day;  // Assign the events for the day
  // Function to convert ISO string time to hours and minutes
  const getTimeInMinutes = (timeString) => {
    const date = new Date(timeString);
    return date.getHours() * 60 + date.getMinutes();  // Return total minutes since midnight
  };

  return (
    <div className={className} style={{ height: `${height}px` }}>
      {Object.keys(events).length > 0 && (Object.entries(events).map(([key, event]) => {
        const eventStartMinutes = getTimeInMinutes(event.startTime);  // Minutes since midnight
        const eventEndMinutes = getTimeInMinutes(event.endTime);
        const eventDuration = eventEndMinutes - eventStartMinutes;  // Duration in minutes

        return (
          <CalendarEvent
            key={key}
            height={(eventDuration / 60) * hourheight}
            width={100}
            top={(eventStartMinutes / 60) * hourheight}
            left={0}  // You can adjust left if you need multiple columns or areas for events
            background="#FF000055"
            border="#505050"
            event={event}
          />
        );
      }))}
      {holidays.length > 0 && (holidays.map((event, index) => {
        const eventStartMinutes = getTimeInMinutes(event.startTime);  // Minutes since midnight
        const eventEndMinutes = getTimeInMinutes(event.endTime);
        const eventDuration = eventEndMinutes - eventStartMinutes;  // Duration in minutes

        return (
          <CalendarEvent
            key={index}
            height={(eventDuration / 60) * hourheight}
            width={100}
            top={(eventStartMinutes / 60) * hourheight}
            left={0}  // You can adjust left if you need multiple columns or areas for events
            background="#00ff0055"
            border="#505050"
            event={event}
          />
        );
      }))}
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

import "./CalendarBody.css";
import { useState, useEffect } from "react";

function CalendarTime({ children }) {
  return <div className="calendar-time">{children}</div>;
}

function CalendarEvent({
  height,
  width,
  top,
  left,
  background,
  border,
  children,
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
      <button className="calendar-event-button" onClick={() => {}}>
        {children}
      </button>
    </div>
  );
}

function CalendarDay({ height, day }) {
  useEffect(() => {
    console.log("CalendarDay useEffect");
  }, []);

  return (
    <div className="calendar-day" style={{ height: `${height}px` }}>
      <CalendarEvent
        height={60 * 8}
        width={100}
        top={0}
        left={0}
        background="#FF000055"
        border="#505050"
      />
      <CalendarEvent
        height={50}
        width={33.3333}
        top={1200}
        left={0}
        background="#FF000055"
        border="#505050"
      />
      <CalendarEvent
        height={50}
        width={33.3333}
        top={1210}
        left={33.3333}
        background="#FF000055"
        border="#505050"
      />
      <CalendarEvent
        height={50}
        width={33.3333}
        top={1220}
        left={66.6666}
        background="#FF000055"
        border="#505050"
      />
      <CalendarEvent
        height={60 * 2}
        width={100}
        top={1320}
        left={0}
        background="#FF000055"
        border="#505050"
      />
    </div>
  );
}

function CalendarBody() {
  const [calendarHeight, setCalendarHeight] = useState(1440);

  const sunday = {
    date: "2021-09-05",
    events: [],
  };

  const monday = {
    date: "2021-09-06",
    events: [],
  };

  const tuesday = {
    date: "2021-09-07",
    events: [],
  };

  const wednesday = {
    date: "2021-09-08",
    events: [],
  };

  const thursday = {
    date: "2021-09-09",
    events: [],
  };

  const firday = {
    date: "2021-09-10",
    events: [],
  };

  const saturday = {
    date: "2021-09-11",
    events: [],
  };

  useEffect(() => {
    console.log("CalendarBody useEffect");
  }, []);

  return (
    <div className="calendar-body">
      <div className="calendar-scroll">
        <div className="time-sections">
          <CalendarTime>12:00 AM</CalendarTime>
          <CalendarTime>1:00 AM</CalendarTime>
          <CalendarTime>2:00 AM</CalendarTime>
          <CalendarTime>3:00 AM</CalendarTime>
          <CalendarTime>4:00 AM</CalendarTime>
          <CalendarTime>5:00 AM</CalendarTime>
          <CalendarTime>6:00 AM</CalendarTime>
          <CalendarTime>7:00 AM</CalendarTime>
          <CalendarTime>8:00 AM</CalendarTime>
          <CalendarTime>9:00 AM</CalendarTime>
          <CalendarTime>10:00 AM</CalendarTime>
          <CalendarTime>11:00 AM</CalendarTime>
          <CalendarTime>12:00 PM</CalendarTime>
          <CalendarTime>1:00 PM</CalendarTime>
          <CalendarTime>2:00 PM</CalendarTime>
          <CalendarTime>3:00 PM</CalendarTime>
          <CalendarTime>4:00 PM</CalendarTime>
          <CalendarTime>5:00 PM</CalendarTime>
          <CalendarTime>6:00 PM</CalendarTime>
          <CalendarTime>7:00 PM</CalendarTime>
          <CalendarTime>8:00 PM</CalendarTime>
          <CalendarTime>9:00 PM</CalendarTime>
          <CalendarTime>10:00 PM</CalendarTime>
          <CalendarTime>11:00 PM</CalendarTime>
        </div>
        <div className="calendar">
          <CalendarDay height={calendarHeight} day={sunday} />
          <CalendarDay height={calendarHeight} day={monday} />
          <CalendarDay height={calendarHeight} day={tuesday} />
          <CalendarDay height={calendarHeight} day={wednesday} />
          <CalendarDay height={calendarHeight} day={thursday} />
          <CalendarDay height={calendarHeight} day={firday} />
          <CalendarDay height={calendarHeight} day={saturday} />
        </div>
      </div>
    </div>
  );
}

export default CalendarBody;

import "./CalendarBody.css";
import { useState } from "react";

function CalendarTime({ children }) {
  return <div className="calendar-time">{children}</div>;
}

function CalendarDay({height}) {
  return (
  <div className="calendar-day" style={{height: `${height}px`}}>
    
  </div>);
}

function CalendarBody() {
  const [calendarHeight, setCalendarHeight] = useState(2400);
  return (
    <div className='calendar-body'>
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
          <CalendarDay height={calendarHeight}/>
          <CalendarDay height={calendarHeight}/>
          <CalendarDay height={calendarHeight}/>
          <CalendarDay height={calendarHeight}/>
          <CalendarDay height={calendarHeight}/>
          <CalendarDay height={calendarHeight}/>
          <CalendarDay height={calendarHeight}/>
        </div>
      </div>
    </div>
  );
}

export default CalendarBody;

import "./Calendar.css";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";
import { useState, useEffect } from "react";

function Calendar({user, tasks}) {
  const [currentDay, setCurrentDay] = useState(new Date());
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className='calendar-container'>
        <CalendarHeader isMobile={isMobile} currentDay={currentDay} changeCurrentDay={(day) => {setCurrentDay(day)}}/>
        <CalendarBody  user={user} isMobile={isMobile} currentDay={currentDay} tasks={tasks}/>
      </div>
    </>
  );
}

export default Calendar;

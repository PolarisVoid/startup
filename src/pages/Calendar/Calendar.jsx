import "./Calendar.css";
import CalendarBody from "./CalendarBody";
import CalendarHeader from "./CalendarHeader";

function Calendar() {
  return (
    <>
      <div className='calendar-container'>
        <CalendarHeader />
        <CalendarBody />
      </div>
    </>
  );
}

export default Calendar;

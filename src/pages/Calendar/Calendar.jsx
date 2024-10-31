import "./Calendar.css";
import CalendarBody from "./Body";
import CalendarHeader from "./Header";

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

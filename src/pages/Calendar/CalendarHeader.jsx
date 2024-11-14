import "./CalendarHeader.css";

function NavigationHeader({isMobile, currentDay, changeCurrentDay}) {

  const monthIndex = [
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December"
  ]

  function prevWeek() {
    if (isMobile) {
      changeCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 1)));
    } else {
      changeCurrentDay(new Date(currentDay.setDate(currentDay.getDate() - 7)));
    }
  }

  function nextWeek() {
    if (isMobile) {
      changeCurrentDay(new Date(currentDay.setDate(currentDay.getDate() + 1)));
    } else {
      changeCurrentDay(new Date(currentDay.setDate(currentDay.getDate() + 7)));
    }
  }

  return (
    <div className="calendar-nav-header">
      <div className="d-flex justify-content-between align-items-center w-50">
        <button className="btn btn-primary btn-primary-1" id="prev-week" onClick={() => {prevWeek()}}>
          <img className="icon" src="/assets/icons/arrow-circle-left.svg" />
        </button>
        <h2 id="current-day" className="golden">
          {monthIndex[currentDay.getMonth()]}
        </h2>
        <button className="btn btn-primary btn-primary-1" id="next-week" onClick={() => {nextWeek()}}>
          <img className="icon" src="/assets/icons/arrow-circle-right.svg" />
        </button>
      </div>
      <div className="btn-group margin-right" role="group">
        <button type="button" className="btn btn-primary btn-primary-1">
          <img className="icon" src="/assets/icons/square-list.svg" />
        </button>
        <button type="button" className="btn btn-primary btn-primary-1">
          <img className="icon" src="/assets/icons/plus.svg" />
        </button>
        <button type="button" className="btn btn-primary btn-primary-1">
          <img className="icon" src="/assets/icons/filter.svg" />
        </button>
        <button type="button" className="btn btn-primary btn-primary-1">
          <img
            className="icon"
            src="/assets/icons/arrow-up-from-bracket.svg"
          />
        </button>
      </div>
    </div>
  );
}

function CalendarHeader({ isMobile, currentDay, changeCurrentDay }) {
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
    <div className="calendar-header">
      <NavigationHeader isMobile={isMobile} currentDay={currentDay} changeCurrentDay={changeCurrentDay}/>
      <div className="calendar-days-header">
        {daysOfWeek.map((day, index) => {
          return (
            <div
              key={index}
              className={isMobile && index !== currentDay.getDay() ? "calendar-day-header hidden" : "calendar-day-header current-day-header"}
            >
              <h3>{day.slice(0, 3)}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CalendarHeader;

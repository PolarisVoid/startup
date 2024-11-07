import "./CalendarHeader.css";

function NavigationHeader() {
  return (
    <div className="calendar-nav-header">
      <div className="d-flex justify-content-between align-items-center w-50">
        <button className="btn btn-primary btn-primary-1" id="prev-week">
          <img className="icon" src="/assets/icons/arrow-circle-left.svg" />
        </button>
        <h2 id="current-day" className="golden">
          7th September
        </h2>
        <button className="btn btn-primary btn-primary-1" id="next-week">
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

function CalendarHeader() {
  return (
    <div className="calendar-header">
      <NavigationHeader />
      <div className="calendar-days-header">
        <div className="calendar-day-header">Sun</div>
        <div className="calendar-day-header">Mon</div>
        <div className="calendar-day-header">Tue</div>
        <div className="calendar-day-header">Wed</div>
        <div className="calendar-day-header">Thu</div>
        <div className="calendar-day-header">Fri</div>
        <div className="calendar-day-header">Sat</div>
      </div>
    </div>
  );
}

export default CalendarHeader;

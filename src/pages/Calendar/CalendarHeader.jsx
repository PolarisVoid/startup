import "./CalendarHeader.css";

function CalendarHeader() {
  return (
    <div className="calendar-header">
      <div className="calendar-nav-header">
        <div class="d-flex justify-content-between align-items-center w-50">
          <button class="btn btn-primary btn-primary-1" id="prev-week">
            ←
          </button>
          <h2 id="current-day" class="golden">
            7th September
          </h2>
          <button class="btn btn-primary btn-primary-1" id="next-week">
            →
          </button>
        </div>
        <div class="btn-group margin-right" role="group">
          <button type="button" class="btn btn-primary btn-primary-1">
            <img class="icon" src="/icons/square-list-svgrepo-com.svg" />
          </button>
          <button type="button" class="btn btn-primary btn-primary-1">
            <img class="icon" src="/icons/plus-svgrepo-com.svg" />
          </button>
          <button type="button" class="btn btn-primary btn-primary-1">
            <img class="icon" src="/icons/filter-svgrepo-com.svg" />
          </button>
          <button type="button" class="btn btn-primary btn-primary-1">
            <img
              class="icon"
              src="/icons/arrow-up-from-bracket-svgrepo-com.svg"
            />
          </button>
        </div>
      </div>
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

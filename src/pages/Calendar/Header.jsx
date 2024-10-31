import "./Header.css";

function CalendarHeader() {
    return (
        <div className='calendar-header'>
            <div className="calendar-nav-header">
                <button className="calendar-nav-button">Today</button>
                <button className="calendar-nav-button">Back</button>
                <button className="calendar-nav-button">Forward</button>
                <h1>Month Year</h1>
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
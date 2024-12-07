function HolidayEvent({ height, width, top, left, background, border, event }) {
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
      <div className="event-header">
        <h3>{event.name}</h3>
      </div>
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
      <button className="calendar-event-button" onClick={() => {}}>
        <div className="event-header">
          <h3>{event.name}</h3>
        </div>
      </button>
    </div>
  );
}

function CalendarDay({ height, day, holidays, events, className }) {
  let hourheight = height / 24; // Height per hour (since there are 24 hours in a day)
  events = day; // Assign the events for the day
  // Function to convert ISO string time to hours and minutes
  const getTimeInMinutes = (timeString) => {
    const date = new Date(timeString);
    return date.getHours() * 60 + date.getMinutes(); // Return total minutes since midnight
  };

  return (
    <div className={className} style={{ height: `${height}px` }}>
      {Object.keys(events).length > 0 &&
        Object.entries(events).map(([key, event]) => {
          const eventStartMinutes = getTimeInMinutes(event.startTime); // Minutes since midnight
          const eventEndMinutes = getTimeInMinutes(event.endTime);
          const eventDuration = eventEndMinutes - eventStartMinutes; // Duration in minutes

          return (
            <CalendarEvent
              key={key}
              height={(eventDuration / 60) * hourheight}
              width={100}
              top={(eventStartMinutes / 60) * hourheight}
              left={0} // You can adjust left if you need multiple columns or areas for events
              background="#FF000055"
              border="#505050"
              event={event}
            />
          );
        })}
      {holidays.length > 0 &&
        holidays.map((event, index) => {
          const eventStartMinutes = getTimeInMinutes(event.startTime); // Minutes since midnight
          const eventEndMinutes = getTimeInMinutes(event.endTime);
          const eventDuration = eventEndMinutes - eventStartMinutes; // Duration in minutes

          return (
            <HolidayEvent
              key={index}
              height={(eventDuration / 60) * hourheight}
              width={100}
              top={(eventStartMinutes / 60) * hourheight}
              left={0} // You can adjust left if you need multiple columns or areas for events
              background="#00ff0055"
              border="#505050"
              event={event}
            />
          );
        })}
    </div>
  );
}

export default CalendarDay;

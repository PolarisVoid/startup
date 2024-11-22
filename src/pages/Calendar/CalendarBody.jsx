import "./CalendarBody.css";
import { useState, useEffect } from "react";

function CalendarTime({ height, children }) {
  return (
    <div className="calendar-time" style={{ height: `${height}px` }}>
      {children}
    </div>
  );
}

function TimeSection({ height }) {
  let hourheight = height / 24;
  return (
    <div className="time-sections">
      <CalendarTime height={hourheight}>12:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>1:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>2:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>3:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>4:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>5:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>6:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>7:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>8:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>9:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>10:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>11:00 AM</CalendarTime>
      <CalendarTime height={hourheight}>12:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>1:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>2:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>3:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>4:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>5:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>6:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>7:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>8:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>9:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>10:00 PM</CalendarTime>
      <CalendarTime height={hourheight}>11:00 PM</CalendarTime>
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
  task,
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
      <button className="calendar-event-button" onClick={() => { }}>
        <div className="event-header">
          <h3>{task.name}</h3>
        </div>
      </button>
    </div>
  );
}

function CalendarDay({ height, day, holidays, tasks, className }) {
  let hourheight = height / 24;  // Height per hour (since there are 24 hours in a day)
  tasks = day;  // Assign the tasks for the day
  // Function to convert ISO string time to hours and minutes
  const getTimeInMinutes = (timeString) => {
    const date = new Date(timeString);
    return date.getHours() * 60 + date.getMinutes();  // Return total minutes since midnight
  };

  return (
    <div className={className} style={{ height: `${height}px` }}>
      {tasks.length > 0 && (tasks.map((task, index) => {
        const taskStartMinutes = getTimeInMinutes(task.startTime);  // Minutes since midnight
        const taskEndMinutes = getTimeInMinutes(task.endTime);
        const taskDuration = taskEndMinutes - taskStartMinutes;  // Duration in minutes

        return (
          <CalendarEvent
            key={index}
            height={(taskDuration / 60) * hourheight}
            width={100}
            top={(taskStartMinutes / 60) * hourheight}
            left={0}  // You can adjust left if you need multiple columns or areas for events
            background="#FF000055"
            border="#505050"
            task={task}
          />
        );
      }))}
      {holidays.length > 0 && (holidays.map((task, index) => {
        const taskStartMinutes = getTimeInMinutes(task.startTime);  // Minutes since midnight
        const taskEndMinutes = getTimeInMinutes(task.endTime);
        const taskDuration = taskEndMinutes - taskStartMinutes;  // Duration in minutes

        return (
          <CalendarEvent
            key={index}
            height={(taskDuration / 60) * hourheight}
            width={100}
            top={(taskStartMinutes / 60) * hourheight}
            left={0}  // You can adjust left if you need multiple columns or areas for events
            background="#00ff0055"
            border="#505050"
            task={task}
          />
        );
      }))}
    </div>
  );
}

function CalendarBody({ user, isMobile, currentDay }) {
  const [calendarHeight, setCalendarHeight] = useState(100 * 24);
  const [PublicHolidays, setPublicHolidays] = useState({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });
  const [tasksByDay, setTasksByDay] = useState({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });

  useEffect(() => {
    fetch("/api/tasks", {
      method: "get",
      headers: { userid: localStorage.getItem("userId") },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);  
        const sortedTasks = {
          Sunday: [],
          Monday: [],
          Tuesday: [],
          Wednesday: [],
          Thursday: [],
          Friday: [],
          Saturday: [],
        };

        const dayNames = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        if (data.length === 0) {
          setTasksByDay(sortedTasks);
          return;
        }
        data.forEach((task) => {
          const taskDate = new Date(task.startTime);
          const dayName = dayNames[taskDate.getDay()];
          // Check if dayName exists in sortedTasks
          if (sortedTasks[dayName]) {
            sortedTasks[dayName].push(task);
          } else {
            console.warn(`Invalid dayName: ${dayName}`); // Log a warning if the dayName is not valid
          }
        });

        setTasksByDay(sortedTasks);
      })
    const url = "https://date.nager.at/api/v3/PublicHolidays/" + new Date().getFullYear() + "/US";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const sortedTasks = {
          Sunday: [],
          Monday: [],
          Tuesday: [],
          Wednesday: [],
          Thursday: [],
          Friday: [],
          Saturday: [],
        };

        const dayNames = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let counter = 0;
        data.forEach((task) => {
          let taskDate = new Date(task.date);
          taskDate.setDate(taskDate.getDate() + 1);
          const dayName = dayNames[taskDate.getDay()];
          task.startTime = new Date(taskDate);
          task.endTime = new Date(taskDate);
          task.startTime.setHours(task.startTime.getHours() - counter);
          task.endTime.setHours(task.startTime.getHours() + 1);
          // Check if dayName exists in sortedTasks
          if (sortedTasks[dayName]) {
            sortedTasks[dayName].push(task);
          } else {
            console.warn(`Invalid dayName: ${dayName}`); // Log a warning if the dayName is not valid
          }
          counter = counter + 1;
        });

        setPublicHolidays(sortedTasks);
      })
  }, []);

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
    <div className="calendar-body">
      <div className="calendar-scroll">
        <TimeSection height={calendarHeight} />
        <div className="calendar">
          {daysOfWeek.map((day, index) => (
            <CalendarDay
              key={day}
              height={calendarHeight}
              day={tasksByDay[day]}
              holidays={PublicHolidays[day]}
              className={isMobile && index !== currentDay.getDay() ? "calendar-day hidden" : "calendar-day current-day"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CalendarBody;

function getEvents() {
  // Grab the Events from the Local Storage
  const events = JSON.parse(localStorage.getItem("events"));

  // Start process for looking for updates
  updateEvents(events);

  if (!events) {
    return [];
  }
  return events;
}

async function updateEvents(events) {
  fetch("/api/events", {
    method: "get",
    headers: { userid: localStorage.getItem("userId") },
  })
    .then((response) => response.json())
    .then((data) => {
      if (events !== data) {
        localStorage.setItem("events", JSON.stringify(data));
      }
    });
}

function organizeByDay(events) {
  // Returns a dictionary of Days with a dictionary of events
  const sortedEvents = {
    Sunday: {},
    Monday: {},
    Tuesday: {},
    Wednesday: {},
    Thursday: {},
    Friday: {},
    Saturday: {},
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

  if (!events || events.length === 0) {
    return sortedEvents;
  }
  for (let [key, value] of Object.entries(events)) {
    const eventDate = new Date(value.startTime);
    const dayName = dayNames[eventDate.getDay()];

    if (sortedEvents[dayName]) {
      sortedEvents[dayName][key] = value;
    } else {
      console.warn(`Invalid dayName: ${dayName}`);
    }
  }
  return sortedEvents;
}

function organizePublicHolidays(holidays) {
  // Returns a dictionary of Days with a dictionary of events
  const sortedHolidays = {
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

  if (!holidays || holidays.length === 0) {
    return sortedHolidays;
  }
  let counter = 0;
  holidays.forEach((holiday) => {
    let holidayDate = new Date(holiday.date);
    holidayDate.setDate(holidayDate.getDate() + 1);
    const dayName = dayNames[holidayDate.getDay()];
    holiday.startTime = new Date(holidayDate);
    holiday.endTime = new Date(holidayDate);
    holiday.startTime.setHours(holiday.startTime.getHours() - counter);
    holiday.endTime.setHours(holiday.startTime.getHours() + 1);
    if (sortedHolidays[dayName]) {
      sortedHolidays[dayName].push(holiday);
    } else {
      console.warn(`Invalid dayName: ${dayName}`); 
    }
    counter = counter + 1;
  });
  return sortedHolidays;
}

function organizeByProject(events) {
  if (!events || events.length === 0) {
    return {};
  }

  return Object.entries(events).reduce((sortedEvents, [key, value]) => {
    sortedEvents[value.project] = sortedEvents[value.project] || {};
    sortedEvents[value.project][key] = value;
    return sortedEvents;
  }, {});
}

export { getEvents, organizeByDay, organizeByProject, organizePublicHolidays };

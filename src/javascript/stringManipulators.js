function capitalizeFirstLetter(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function toDayOfWeekAndDay(date) {
  if (!date) {
    return "";
  }
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return `${dayNames[date.getDay()].slice(0, 3)} ${date.getDate()}`;
}

export { capitalizeFirstLetter, toDayOfWeekAndDay };

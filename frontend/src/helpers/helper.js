const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

//get the names of the day for dates
export default function convertDate(date) {
  const currentDay = new Date(date);
  const dayName = currentDay.getDay();
  return days[dayName];
}

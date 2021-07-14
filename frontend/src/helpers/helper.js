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
export function convertDate(date) {
  const currentDay = new Date(date);
  const dayName = currentDay.getDay();
  return days[dayName];
}

//Get the logged in user id or null if not logged in

//get the logged in userdata from local storge

export function getUser() {
  let userData = localStorage.getItem("user");
  userData = JSON.parse(userData);
  //get the user id
  return userData ? userData.id : null;
}

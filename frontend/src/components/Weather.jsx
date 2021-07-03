export default function Weather(props) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const currentDay = new Date(props.date);
  const dayName = currentDay.getDay();
  console.log("day", days[dayName]);
  return (
    <div className="border m-2">
      <p>{props.date}</p>
      <p>{props.temp}</p>
      <img
        alt={props.description}
        src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`}
      />
      <p>{props.description}</p>
    </div>
  );
}

// https://www.weatherbit.io/static/img/icons/t01d.png
// https://www.weatherbit.io/static/img/c02d.png

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

  function convertDate(date) {
    const currentDay = new Date(props.date);
    const dayName = currentDay.getDay();
    return days[dayName];
  }

  return (
    <div className="border m-2">
      <p>{convertDate(props.date)}</p>
      <p>{props.date}</p>
      <p>{Math.round(props.temp)}°C</p>
      <img
        alt={props.description}
        src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`}
      />
      <p>
        H:{Math.round(props.maxTemp)} L:{Math.round(props.minTemp)}
      </p>
      <p>{props.description}</p>
    </div>
  );
}

// https://www.weatherbit.io/static/img/icons/t01d.png
// https://www.weatherbit.io/static/img/c02d.png

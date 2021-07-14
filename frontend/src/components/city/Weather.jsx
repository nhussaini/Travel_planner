import { convertDate } from "helpers/helper.js";
export default function Weather(props) {
  return (
    <div className="weather-container">
      <p className="alph-date">{convertDate(props.date)}</p>
      <p className="numeric-date">{props.date}</p>
      <p className="current-temp">{Math.round(props.temp)}°C</p>
      <div className="weather-card">
        <img
          alt={props.description}
          src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`}
        />
      </div>
      <p className="text-wrap p-2">{props.description}</p>
      <p className="min-max-temp">
        High:{Math.round(props.maxTemp)} Low:{Math.round(props.minTemp)}
      </p>
    </div>
  );
}

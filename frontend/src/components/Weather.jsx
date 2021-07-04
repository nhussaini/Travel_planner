import "../styles/weather.scss";

import convertDate from "../helpers/helper";
export default function Weather(props) {
  return (
    // <div className="border m-2">
    //   <p>{convertDate(props.date)}</p>
    //   <p>{props.date}</p>
    //   <p>{Math.round(props.temp)}°C</p>
    //   <img
    //     alt={props.description}
    //     src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`}
    //   />
    //   <p>
    //     H:{Math.round(props.maxTemp)} L:{Math.round(props.minTemp)}
    //   </p>
    //   <p>{props.description}</p>
    // </div>

    <div className="border m-2">
      <p>{convertDate(props.date)}</p>
      <p>{props.date}</p>
      <div className="weather-card">
        <img
          className="w-50"
          alt={props.description}
          src={`https://www.weatherbit.io/static/img/icons/${props.icon}.png`}
        />
        <p className="">{Math.round(props.temp)}°C</p>
      </div>
      <p className="text-wrap">{props.description}</p>
      <p>
        H:{Math.round(props.maxTemp)} L:{Math.round(props.minTemp)}
      </p>
    </div>

    // <div class="border m-2">
    //   <p>Sunday</p>
    //   <p>2021-07-04</p>
    //   <div class="d-flex align-items-center justify-content-between p-2">
    //     <img
    //       class="w-50"
    //       alt="Broken clouds"
    //       src="https://www.weatherbit.io/static/img/icons/c03d.png"
    //     />
    //     <p>21°C</p>
    //   </div>
    //   <p>Broken clouds</p>
    //   <p>H:27 L:16</p>
    // </div>
  );
}

// https://www.weatherbit.io/static/img/icons/t01d.png
// https://www.weatherbit.io/static/img/c02d.png

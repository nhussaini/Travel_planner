import "styles/weather.scss";

import axios from "axios";
import { useState, useEffect } from "react";
import Weather from "./Weather";

export default function WeatherList(props) {
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    const weatherCall = `https://api.weatherbit.io/v2.0/forecast/daily?city=${props.location}&key=d3509fa02316452b83ce154197d1139b&days=7`;
    axios.get(weatherCall).then((data) => {
      setWeatherData(data.data.data);
    });
  }, [props.location]);

  return (
    <div>
      <div>
        <h2 className="heading">
          {props.location ? `7 Day forecast for  ${props.location}` : ""}
        </h2>
      </div>
      <div className="weather-data-container">
        {weatherData
          ? weatherData.map((weather) => {
              return (
                <Weather
                  key={weather.datetime}
                  date={weather.datetime}
                  temp={weather.temp}
                  minTemp={weather.min_temp}
                  maxTemp={weather.max_temp}
                  icon={weather.weather.icon}
                  description={weather.weather.description}
                />
              );
            })
          : null}
      </div>
    </div>
  );
  // return (
  //   <div className="d-flex justify-content-center">
  //     <Weather />
  //   </div>
  // );
}

import Weather from "./Weather";

export default function WeatherList(props) {
  const allWeather = props.weather.map((weather) => {
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
  });
  return (
    <div>
      <div>
        <h2 className="heading">
          {props.location ? `7 Day forecast for  ${props.location}` : ""}
        </h2>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {allWeather}
      </div>
    </div>
  );
  // return (
  //   <div className="d-flex justify-content-center">
  //     <Weather />
  //   </div>
  // );
}

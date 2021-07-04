import Weather from "./Weather";

export default function WeatherList(props) {
  console.log(props.weather);
  console.log(props.weather[0]);
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
    <div className="d-flex flex-wrap justify-content-center">{allWeather}</div>
  );
  // return (
  //   <div className="d-flex justify-content-center">
  //     <Weather />
  //   </div>
  // );
}

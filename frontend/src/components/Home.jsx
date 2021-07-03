import { useState, useEffect } from "react";

import Form from "./Form";
import WeatherList from "./WeatherList";
import ImagesList from "./ImagesList";
import axios from "axios";

export default function Home(props) {
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    //fetch images for specific location
    if (location) {
      axios.post("/imageData", { userInput: location }).then((data) => {
        console.log("data", data);
        setImages(data.data);
      });
      //fetch weather information for a specific location
      axios.post("/weatherData", { userInput: location }).then((data) => {
        setWeather(data.data.data);
        // console.log("weather data:", data.data.data);
      });

      // axios.post("/citySummary", { userInput: location }).then((data) => {
      //   // setWeather(data.data.data);
      //   // console.log("weather data:", data.data.data);
      //   console.log("axios front end city summary");
      // });
    }
  }, [location]);

  function setLocationState(userInput) {
    console.log(userInput);
    // setLocation(null);
    setLocation(userInput);
  }
  return (
    <div>
      Home
      <Form setLocationState={setLocationState} />
      <ImagesList location={location} images={images} />
      <WeatherList weather={weather} />
    </div>
  );
}

import { useState, useEffect } from "react";

import Form from "./Form";
import WeatherList from "./WeatherList";
import ImagesList from "./ImagesList";
import CityDetails from "./CityDetails";
import ThingsToDoList from "./ThingsToDoList";
import FlightData from "./FlightData";
import axios from "axios";

export default function Home(props) {
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);
  const [weather, setWeather] = useState([]);
  const [locationData, setLocationData] = useState([]);
  const [thingsToDo, setThingsToDo] = useState([]);

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
      // Fetch Summary information for Location
      axios.post("/locationSummary", { userInput: location }).then((data) => {
        setLocationData(data.data);
        console.log("Location data---", data.data);
      });
      // Fetch thingstodo for a location
      axios.post("/thingsToDo", { userInput: location }).then((data) => {
        setThingsToDo(data.data);
        console.log("ThingstoDo data---", data);
      });
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
      <CityDetails locationData={locationData} />
      <ThingsToDoList location={location} thingsToDo={thingsToDo} />
      <ImagesList location={location} images={images} />
      <WeatherList location={location} weather={weather} />
      {/* <FlightData /> */}
    </div>
  );
}

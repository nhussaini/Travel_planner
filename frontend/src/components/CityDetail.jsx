import { useCityData } from "../hooks/useCityData";

import WeatherList from "./WeatherList";
import ImagesList from "./ImagesList";
import CityDetails from "./CityDetails";
import ThingsToDoList from "./ThingsToDoList";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function CityDetail(props) {
  const location = useLocation();
  const { state } = useCityData();

  useEffect(() => {
    if (location.state.key) {
      axios
        .post("/cities/getCityData", { userInput: location.state.key })
        .then((data) => console.log(data));
    }
  }, [location.state.key]);
  return (
    <div>
      City Detail
      {/* <CityDetails
        locationData={state.locationData}
        thingsToDo={state.thingsToDo}
      />
      <ThingsToDoList location={state.location} thingsToDo={state.thingsToDo} />
      <ImagesList location={state.location} images={state.images} />
      <WeatherList location={state.location} weather={state.weather} /> */}
    </div>
  );
}

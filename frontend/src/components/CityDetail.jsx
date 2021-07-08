import { useCityData } from "../hooks/useCityData";

import WeatherList from "./WeatherList";
import ImagesList from "./ImagesList";
import CityDetails from "./CityDetails";
import ThingsToDoList from "./ThingsToDoList";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function CityDetail(props) {
  const location = useLocation();
  const { state } = useCityData();
  const { id } = useParams();

  useEffect(() => {
    if (location.state) {
      axios
        .post("/cities/getCityData", { userInput: location.state.key })
        .then((data) => {
          const fetchedData = data.data;
          console.log(fetchedData);
        });
    } else {
      axios.get(`/cities/${id}`).then((data) => {
        const fetchedData = data.data;
        console.log(fetchedData);
      });
    }
  }, []);
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

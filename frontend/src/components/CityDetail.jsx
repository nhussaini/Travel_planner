import { useCityData } from "../hooks/useCityData";

import WeatherList from "./WeatherList";
import ImagesList from "./ImagesList";
import CityOverview from "./CityOverview";
import ThingsToDoList from "./ThingsToDoList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function CityDetail(props) {
  const [state, setState] = useState({
    // location: "",
    images: [],
    weatherData: [],
    locationData: [],
    thingsToDo: [],
  });

  const location = useLocation();
  // const [status, setStatus] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`/cities/${id}`).then((data) => {
      const { images, cityDetails, attractions } = data.data;
      setState((prev) => ({
        location: cityDetails.short_name,
        images: images,
        locationData: cityDetails,
        thingsToDo: attractions,
      }));
      // console.log("Line 22---", data.data);
      const weatherCall = `https://api.weatherbit.io/v2.0/forecast/daily?city=${state.location}&key=d3509fa02316452b83ce154197d1139b&days=7`;
      axios.get(weatherCall).then((data) => {
        // console.log("After api call", data.data.data);
        setState((prev) => ({
          ...prev,
          weatherData: data.data.data,
        }));
      });
    });
  }, [state.location]);
  return (
    <div>
      City Detail
      <CityOverview
        locationData={state.locationData}
        thingsToDo={state.thingsToDo}
      />
      {/* <ThingsToDoList location={state.location} thingsToDo={state.thingsToDo} /> */}
      <ImagesList location={state.location} images={state.images} />
      {state.weatherData ? (
        <WeatherList
          location={state.location}
          weatherData={state.weatherData}
        />
      ) : null}
    </div>
  );
}

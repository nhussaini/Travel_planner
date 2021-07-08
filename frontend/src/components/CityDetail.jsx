import { useCityData } from "../hooks/useCityData";

import WeatherList from "./WeatherList";
import ImagesList from "./ImagesList";
import CityDetails from "./CityDetails";
import ThingsToDoList from "./ThingsToDoList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export default function CityDetail(props) {
  const location = useLocation();
  const [status, setStatus] = useState(false);
  const { state } = useCityData();
  const { id } = useParams();

  useEffect(() => {
    console.log(status, "----");
    if (location.state) {
      axios
        .post("/cities/getCityData", { userInput: location.state.key })
        .then((data) => {
          // We want to just send the post request to backend, where it will redirect to the get route for city, in that route we want to change the state based on the data returned from backend. at the moment we are haviong to do it after bot the post and get request.....
          console.log("Post done");
          setStatus(true);
          // const fetchedData = data.data;
          // console.log("From Line 22----", fetchedData);
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

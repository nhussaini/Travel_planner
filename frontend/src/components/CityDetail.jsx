import { useCityData } from "../hooks/useCityData";

import WeatherList from "./WeatherList";
import ImagesList from "./ImagesList";
import CityOverview from "./CityOverview";
import Navbar from "./Navbar";
import ThingsToDoList from "./ThingsToDoList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import CityLinkButtons from "./CityLinkButtons";

export default function CityDetail(props) {
  const [state, setState] = useState({
    // location: "",
    images: [],
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
    });
  }, [state.location]);
  return (
    <div>
      City Detail
      <Navbar />
      <CityLinkButtons />
      <ImagesList location={state.location} images={state.images} />
      <CityOverview
        locationData={state.locationData}
        thingsToDo={state.thingsToDo}
      />
      {/* <ThingsToDoList location={state.location} thingsToDo={state.thingsToDo} /> */}
      {state.location ? <WeatherList location={state.location} /> : null}
    </div>
  );
}

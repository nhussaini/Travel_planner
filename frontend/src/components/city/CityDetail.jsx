import { useCityData } from "../../hooks/useCityData";

import "styles/app.scss";
import WeatherList from "./WeatherList";
import ImagesList from "./ImagesList";
import GoogleMap from "./GoogleMap";
import Navbar from "../Navbar";
import ThingsToDoList from "./ThingsToDoList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CityLinkButtons from "./CityLinkButtons";

export default function CityDetail(props) {
  let history = useHistory();
  const [state, setState] = useState({
    location: "",
    images: [],
    locationData: [],
    thingsToDo: [],
  });

  const { id } = useParams();
  function handleClick(e) {
    history.push({
      pathname: `/trip/${id}/new`,
      state: {
        key: id,
        attractions: state.thingsToDo,
        locationData: state.locationData,
      },
    });
  }

  useEffect(() => {
    axios.get(`/cities/${id}`).then((data) => {
      const { images, cityDetails, attractions } = data.data;
      setState((prev) => ({
        location: cityDetails.short_name,
        images: images,
        locationData: cityDetails,
        thingsToDo: attractions,
      }));
    });
  }, [state.location]);
  return (
    <div>
      City Detail
      <Navbar />
      <button className="btn btn-primary" onClick={handleClick}>
        Add Trip
      </button>
      <CityLinkButtons locationData={state.locationData} />
      <ImagesList location={state.location} images={state.images} />
      <main className="map-attraction-container">
        <div>
          <h2 className="heading">
            {state.location ? `Top Attractions in ${state.location}` : ""}
          </h2>
        </div>
        <section className="map-attraction">
          <ThingsToDoList
            location={state.location}
            thingsToDo={state.thingsToDo}
          />
          <GoogleMap
            lat={Number(state.locationData.latitude)}
            lng={Number(state.locationData.longitude)}
            location={state.locationData.long_name}
            thingsToDo={state.thingsToDo.slice(0, 10)}
          />
        </section>
      </main>
      {state.location ? <WeatherList location={state.location} /> : null}
    </div>
  );
}

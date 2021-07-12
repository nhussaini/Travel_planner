import { useCityData } from "../../hooks/useCityData";

import WeatherList from "./WeatherList";
import ImagesList from "./ImagesList";
import GoogleMap from "./GoogleMap";
import NavBar from "../NavBar";
import ThingsToDoList from "./ThingsToDoList";
import Error404 from "components/Error404";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import CityLinkButtons from "./CityLinkButtons";
import "styles/cityDetail.scss";

export default function CityDetail(props) {
  let history = useHistory();
  const [state, setState] = useState({
    error404: false,
    location: "",
    images: [],
    locationData: [],
    thingsToDo: [],
  });

  const { id } = useParams();
  console.log("id from line 26=> ", id);
  //to handle the click event to create a new trip
  function handleClick(e) {
    // axios.post("/new-trip", { userId: userId });
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
    axios.get(`/api/cities/${id}`).then((data) => {
      if (!data.data) {
        setState((prev) => ({
          ...prev,
          error404: true,
        }));
      } else {
        const { images, cityDetails, attractions } = data.data;
        setState((prev) => ({
          location: cityDetails.short_name,
          images: images,
          locationData: cityDetails,
          thingsToDo: attractions,
        }));
      }
    });
  }, [state.location]);

  return !state.error404 ? (
    <main>
      <NavBar />
      <div className="heading">
        <h2>Explore {state.location}!</h2>
        <hr className="hr" />
      </div>
      <CityLinkButtons locationData={state.locationData} />
      <ImagesList location={state.location} images={state.images} />
      <button className="add-trip-btn" onClick={handleClick}>
        Create Trip
      </button>
      <main className="map-attraction-container">
        <div>
          <h2 className="heading">
            {state.location ? `Top Attractions in ${state.location}` : ""}
          </h2>
          <hr className="hr" />
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
    </main>
  ) : (
    <Error404 />
  );
}

import WeatherList from "./WeatherList";
import Footer from "components/Footer";
import ImagesList from "./ImagesList";
import GoogleMap from "./GoogleMap";
import NavSticky from "../NavSticky";
import ThingsToDoList from "./ThingsToDoList";
import Error404 from "components/Error404";
import { getUser } from "helpers/helper";
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

  //id is the name of the city below
  const { id } = useParams();

  const userId = getUser();

  //to handle the click event to create a new trip
  function handleClick(e) {
    if (!userId) {
      history.push({
        pathname: `/login`,
      });
    } else {
      history.push({
        pathname: `/trip/${id}/new`,
        state: {
          key: id,
          attractions: state.thingsToDo,
          locationData: state.locationData,
        },
      });
    }
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
  }, [id]);

  return !state.error404 ? (
    <main>
      <NavSticky />
      <div className="heading">
        <h2>Explore {state.location}!</h2>
        <hr className="hr" />
      </div>
      <CityLinkButtons locationData={state.locationData} />
      <ImagesList location={state.location} images={state.images} />
      <div className="create-trip-btn-div">
        <button className="add-trip-btn btn-sm" onClick={handleClick}>
          Create Trip
        </button>
      </div>
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
      <Footer />
    </main>
  ) : (
    <Error404 />
  );
}

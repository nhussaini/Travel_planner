import { useLocation, useParams } from "react-router-dom";
import ThingsToDoList from "./city/ThingsToDoList";
import GoogleMap from "./city/GoogleMap";
import ToDoList from "./ToDoList";
import "styles/cityDetail.scss";
import "styles/TripPlanner.scss";
import axios from "axios";
import { useEffect, useState } from "react";

export default function TripPlanner(props) {
  const [cityInfo, setCityInfo] = useState({});
  const [cityAttractions, setCityAttractions] = useState([]);

  const location = useLocation();

  const { city } = useParams();

  useEffect(() => {
    axios.post("/back/cities/new-trip", { city: city }).then((data) => {
      setCityInfo(data.data.cityInfo);
      setCityAttractions(data.data.cityAttractions);
      console.log(data.data);
    });
  }, []);
  const locationData = location.state.locationData;
  console.log("locationdata****", location.state);
  const attractions = location.state.attractions;

  //get the logged in userdata from local storge
  let userData = localStorage.getItem("user");
  userData = JSON.parse(userData);
  //get the user id
  const id = userData ? userData.id : null;
  return (
    <div>
      Choose an attraction
      <div className="trip-header">
        <img
          src={locationData.image_url}
          alt="city"
          className="img-header-trip"
        />
        <div className="overlay-trip">
          <p>Welcome</p>
        </div>
      </div>
      <div className="map-attraction-container">
        <ToDoList userId={id} />
        <section className="map-attraction">
          <ThingsToDoList
            location={location.state.id}
            thingsToDo={attractions.slice(0, 3)}
          />
          <GoogleMap
            lat={Number(locationData.latitude)}
            lng={Number(locationData.longitude)}
            location={locationData.long_name}
            thingsToDo={attractions.slice(0, 10)}
          />
        </section>
      </div>
    </div>
  );
}

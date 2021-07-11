import { useLocation, useParams } from "react-router-dom";
import ThingsToDoList from "./city/ThingsToDoList";
import GoogleMap from "./city/GoogleMap";
import ToDoList from "./ToDoList";
import NavBar from "components/NavBar";
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
  //get the logged in userdata from local storge
  let userData = localStorage.getItem("user");
  userData = JSON.parse(userData);
  //get the user id
  const id = userData ? userData.id : null;
  return (
    <div>
      <NavBar />
      <div className="trip-header">
        <img src={cityInfo.image_url} alt="city" className="img-header-trip" />
        <div className="overlay-trip">
          <p>Welcome</p>
        </div>
      </div>
      <div className="map-attraction-container">
        <ToDoList userId={id} />
        <section className="map-attraction">
          <ThingsToDoList
            location={cityInfo.short_name}
            thingsToDo={cityAttractions.slice(0, 3)}
          />
          <GoogleMap
            lat={Number(cityInfo.latitude)}
            lng={Number(cityInfo.longitude)}
            location={cityInfo.long_name}
            thingsToDo={cityAttractions.slice(0, 10)}
          />
        </section>
      </div>
    </div>
  );
}

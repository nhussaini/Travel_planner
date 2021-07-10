import { useLocation } from "react-router-dom";
import ThingsToDoList from "./city/ThingsToDoList";
import GoogleMap from "./city/GoogleMap";
import "styles/cityDetail.scss";
//import "styles/TripPlanner.scss";

export default function TripPlanner(props) {
  const location = useLocation();
  const locationData = location.state.locationData;
  console.log("locationdata****", location.state);
  const attractions = location.state.attractions;

  console.log("attractions", attractions);
  return (
    <div>
      {" "}
      Choose an attraction
      <div className="map-attraction-container">
        <section className="map-attraction">
          <ThingsToDoList
            location={location.state.id}
            thingsToDo={attractions}
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

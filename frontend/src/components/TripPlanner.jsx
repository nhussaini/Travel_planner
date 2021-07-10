import { useLocation } from "react-router-dom";
import ThingsToDoList from "./city/ThingsToDoList";
import "styles/cityDetail.scss";
//import "styles/TripPlanner.scss";

export default function TripPlanner(props) {
  const location = useLocation();

  const attractions = location.state.attractions;

  console.log("attractions", attractions);
  return (
    <div className="map-attraction-container">
      <section className="map-attraction">
        <ThingsToDoList location={location.state.id} thingsToDo={attractions} />
      </section>
    </div>
  );
}

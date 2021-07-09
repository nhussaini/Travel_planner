import "../styles/cityLinkbuttons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faMapMarkedAlt,
  faHiking,
  faCalendarAlt,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";

export default function CityLinkButtons(props) {
  console.log(props);
  const {
    airbnb_url,
    alltrails_url,
    getyourguide_url,
    google_events_url,
    kayak_car_rental_url,
    kayak_lodgings_url,
  } = props.locationData;

  return (
    <section className="links-container">
      <div className="button">
        <div className="circle"></div>
        <a href={airbnb_url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={["fab", "airbnb"]} size="lg" />
          <span>AirBNB</span>
        </a>
      </div>
      <div className="button">
        <div className="circle"></div>
        <a href={kayak_lodgings_url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faHotel} size="lg" />
          <span>Hotels</span>
        </a>
      </div>
      <div className="button">
        <div className="circle"></div>
        <a href={google_events_url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
          <span>Events</span>
        </a>
      </div>
      <div className="button">
        <div className="circle"></div>
        <a href={alltrails_url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faHiking} size="lg" />
          <span>Hiking</span>
        </a>
      </div>
      <div className="button">
        <div className="circle"></div>
        <a href={getyourguide_url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faMapMarkedAlt} size="lg" />
          <span>Guide</span>
        </a>
      </div>
      <div className="button">
        <div className="circle"></div>
        <a href={kayak_car_rental_url} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faCar} size="lg" />
          <span>Rental</span>
        </a>
      </div>
    </section>
  );
}

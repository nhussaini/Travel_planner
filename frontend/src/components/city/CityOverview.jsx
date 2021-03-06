import GoogleMap from "./GoogleMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCar,
  faMapMarkedAlt,
  faHiking,
  faCalendarAlt,
  faHotel,
} from "@fortawesome/free-solid-svg-icons";
library.add(fab);

export default function CityOverview(props) {
  return (
    <>
      {props.locationData && props.thingsToDo.length ? (
        <section>
          <div>
            <h2 className="heading">{`Overview of Toronto`}</h2>
          </div>
          <div className="d-flex justify-content-around">
            <div>
              City Details
              <p>
                Where:
                <span>{props.locationData.long_name}</span>
              </p>
              <div>
                <p>
                  population: <span>{props.locationData.population}</span>
                </p>
              </div>
              <p>
                Checkout some Airbnb's{" "}
                <a href={props.locationData.airbnb_url}>
                  <FontAwesomeIcon icon={["fab", "airbnb"]} size="lg" />
                </a>
              </p>
              <p>
                Checkout some hotels{" "}
                <a
                  href={props.locationData.kayak_lodgings_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faHotel} size="lg" />
                </a>
              </p>
              <p>
                Upcoming events{" "}
                <a
                  href={props.locationData.google_events_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
                </a>
              </p>
              <p>
                Find where you can walk in the nature{" "}
                <a
                  href={props.locationData.alltrails_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faHiking} size="lg" />
                </a>
              </p>
              <p>
                Explore guides in the city{" "}
                <a
                  href={props.locationData.getyourguide_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <FontAwesomeIcon icon={faMapMarkedAlt} size="lg" />
                </a>
              </p>
              <p>
                Rent a car{" "}
                <a
                  href={props.locationData.kayak_car_rental_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {""}
                  <FontAwesomeIcon icon={faCar} size="lg" />
                </a>
              </p>
            </div>
            <GoogleMap
              lat={Number(props.locationData.latitude)}
              lng={Number(props.locationData.longitude)}
              location={props.locationData.long_name}
              thingsToDo={props.thingsToDo.slice(0, 10)}
            />
          </div>
        </section>
      ) : null}
    </>
  );
}

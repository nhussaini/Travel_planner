import Map from "./Map";
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

export default function CityDetails(props) {
  console.log("props test", props.locationData.attributes);

  return (
    <>
      {props.locationData.attributes ? (
        <section>
          <div>
            <h2 className="heading">{`Overview of Toronto`}</h2>
          </div>
          <div className="d-flex justify-content-around">
            <div>
              City Details
              <p>
                Where:
                <span>{props.locationData.attributes.long_name}</span>
              </p>
              <div>
                <h5>Keep in mind</h5>
                <p>
                  safety:{" "}
                  <span>
                    {
                      props.locationData.attributes.safety[
                        props.locationData.attributes.name
                      ]?.text
                    }
                  </span>
                </p>
                <p>
                  population:{" "}
                  <span>{props.locationData.attributes.population}</span>
                </p>
              </div>
              <p>
                Checkout some Airbnb's{" "}
                <a href={props.locationData.attributes.airbnb_url}>
                  <FontAwesomeIcon icon={["fab", "airbnb"]} size="lg" />
                </a>
              </p>
              <p>
                Checkout some hotels{" "}
                <a
                  href={props.locationData.attributes.kayak_lodgings_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faHotel} size="lg" />
                </a>
              </p>
              <p>
                Upcoming events{" "}
                <a
                  href={props.locationData.attributes.google_events_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
                </a>
              </p>
              <p>
                Find where you can walk in the nature{" "}
                <a
                  href={props.locationData.attributes.alltrails_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faHiking} size="lg" />
                </a>
              </p>
              <p>
                Explore guides in the city{" "}
                <a
                  href={props.locationData.attributes.getyourguide_url}
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
                  href={props.locationData.attributes.kayak_car_rental_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {""}
                  <FontAwesomeIcon icon={faCar} size="lg" />
                </a>
              </p>
            </div>
            <Map location={props.locationData.attributes.long_name} />
          </div>
        </section>
      ) : null}
    </>
  );
}

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
  //const element = <FontAwesomeIcon icon={faCoffee} />;

  return (
    <>
      {props.locationData.attributes ? (
        <div className="d-flex justify-content-around text-left">
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
          </div>

          <div className="text-left">
            <p>
              Checkout some Airbnb's{" "}
              <a href={props.locationData.attributes.airbnb_url}>
                <FontAwesomeIcon icon={["fab", "airbnb"]} />
              </a>
            </p>

            <p>
              Checkout some hotels{" "}
              <a
                href={props.locationData.attributes.kayak_lodgings_url}
                target="_blank"
              >
                <FontAwesomeIcon icon={faHotel} />
              </a>
            </p>
            <p>
              Upcoming events{" "}
              <a
                href={props.locationData.attributes.google_events_url}
                target="_blank"
              >
                <FontAwesomeIcon icon={faCalendarAlt} />
              </a>
            </p>
            <p>
              Find where you can walk in the nature{" "}
              <a
                href={props.locationData.attributes.alltrails_url}
                target="_blank"
              >
                <FontAwesomeIcon icon={faHiking} />
              </a>
            </p>
            <p>
              Explore guides in the city{" "}
              <a
                href={props.locationData.attributes.getyourguide_url}
                target="_blank"
              >
                {" "}
                <FontAwesomeIcon icon={faMapMarkedAlt} />
              </a>
            </p>
            <p>
              Rent a car{" "}
              <a
                href={props.locationData.attributes.kayak_car_rental_url}
                target="_blank"
              >
                {""}
                <FontAwesomeIcon icon={faCar} />
              </a>
            </p>
          </div>
        </div>
      ) : null}
    </>

    // <div>
    //   City Details
    //   <p>
    //     Where:
    //     <span>{props.locationData.attributes?.population}</span>
    //   </p>
    // </div>
  );
}

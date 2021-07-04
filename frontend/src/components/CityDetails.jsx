export default function CityDetails(props) {
  console.log("props test", props.locationData.attributes);
  return (
    <>
      {props.locationData.attributes ? (
        <div className="d-flex justify-content-center text-left">
          <div>
            City Details
            <p>
              Where:
              <span>{props.locationData.attributes.long_name}</span>
            </p>
            <div>
              <h5>Keep in mind</h5>
              <p>
                Covid Risk:{" "}
                <span>
                  {props.locationData.attributes.covid["Cook County"]?.text}
                </span>
              </p>
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
              <a href={props.locationData.attributes.airbnb_url}>
                checkout airbnb
              </a>
            </p>

            <p>
              <a
                href={props.locationData.attributes.kayak_lodgings_url}
                target="_blank"
              >
                checkout some hotels
              </a>
            </p>
            <p>
              <a
                href={props.locationData.attributes.google_events_url}
                target="_blank"
              >
                upcoming events
              </a>
            </p>
            <p>
              Find where you can walk in the nature
              <a
                href={props.locationData.attributes.alltrails_url}
                target="_blank"
              >
                here
              </a>
            </p>
            <p>
              Take a tour in the city{" "}
              <a
                href={props.locationData.attributes.getyourguide_url}
                target="_blank"
              >
                {" "}
                here
              </a>
            </p>
            <p>
              rent a car
              <a
                href={props.locationData.attributes.kayak_car_rental_url}
                target="_blank"
              >
                {" "}
                here
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

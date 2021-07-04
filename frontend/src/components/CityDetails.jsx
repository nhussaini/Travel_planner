export default function CityDetails(props) {
  console.log("props test", props.locationData.attributes);
  return (
    <>
      {props.locationData.attributes ? (
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
          </div>
          <p>
            <a href={props.locationData.attributes.airbnb_url}>
              checkout airbnb
            </a>
          </p>
          <p>
            Find where you can walk in the nature
            <a
              href={props.locationData.attributes.alltrails_url}
              target="_blank"
            >
              {" "}
              here{" "}
            </a>
          </p>
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

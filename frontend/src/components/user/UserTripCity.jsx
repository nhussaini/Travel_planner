import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function UserTripCity(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick(e) {
    console.log(clicked);
    props.getTripData(props.id, props.short_name);
    // setClicked((prev) => !prev);
  }
  return (
    <div className={clicked ? "trip clicked-trip" : "trip"}>
      <button as="href" onClick={handleClick}>
        <img src={props.image_url} alt="" />
        <h2>{props.short_name}</h2>
      </button>
    </div>
  );
}

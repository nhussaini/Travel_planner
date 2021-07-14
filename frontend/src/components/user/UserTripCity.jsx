import { useState } from "react";

export default function UserTripCity(props) {
  const [clicked, setClicked] = useState(false);

  function handleClick(e) {
    props.getTripData(props.id, props.short_name);
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

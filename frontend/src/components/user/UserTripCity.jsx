import { faCommentsDollar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import confirmDelete from "./ConfirmDelete";

export default function UserTripCity(props) {
  const [clicked, setClicked] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  function handleClick(e) {
    props.getTripData(props.id, props.short_name);
  }
  function handleDelete() {
    props.deleteTrip(props.id);
  }
  const showconfirmation = () => setShowMessage(true);
  const cancel = () => setShowMessage(false);

  return (
    <div className="trip">
      {!showMessage ? (
        <div>
          <button as="href" onClick={handleClick}>
            <img src={props.image_url} alt="" />
            <h2>{props.short_name}</h2>
          </button>
          <button onClick={showconfirmation}> Delete</button>
        </div>
      ) : (
        <ConfirmDelete cancel={cancel} handleDelete={handleDelete} />
      )}
    </div>
  );
}

import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function UserTripCity(props) {
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
          <button className="delete-btn" onClick={showconfirmation}>
            <FontAwesomeIcon icon={faTrash} size="lg" className="font-icon" />
          </button>
        </div>
      ) : (
        <ConfirmDelete cancel={cancel} handleDelete={handleDelete} />
      )}
    </div>
  );
}

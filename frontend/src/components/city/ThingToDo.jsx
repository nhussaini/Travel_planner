import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";

export default function ThingToDo(props) {
  const [show, setShow] = useState(false);

  //get the logged in userdata from local storge
  let userData = JSON.parse(localStorage.getItem("user"));
  //get the user id
  const id = userData ? userData.id : null;
  const elementRef = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = (e, data) => {
    console.log(elementRef.current);
    if()
    handleShow();
  };
  return (
    <div className="attraction-card card">
      <img className="card-img-top" src={props.image_url} alt={props.name} />
      <div className="favorite-icon">
        <button className="icon-holder" onClick={handleClick}>
          <FontAwesomeIcon icon={faHeart} className="highlight" inverse />
        </button>
      </div>
      {/* <FontAwesomeIcon icon={["far", faHeart]} /> */}
      <div className="user-rating">{props.rating}</div>
      <div className="attraction-summary">
        <p ref={elementRef}>{props.name}</p>
        <div>
          {/* <Rating rating={props.rating} />{" "} */}
          <span className="rating-count">({props.reviewsCount})</span>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
        <Modal.Header closeButton>
          <Modal.Title>{`Images of ${props.location}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
      </Modal>
    </div>
  );
}

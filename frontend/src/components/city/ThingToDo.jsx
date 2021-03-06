import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ShowMessage from "components/ShowMessage";
import StarRatings from "react-star-ratings";
import { useLocation } from "react-router-dom";

export default function ThingToDo(props) {
  const location = useLocation();
  const [show, setShow] = useState(false);

  //get the logged in userdata from local storge
  let user = JSON.parse(localStorage.getItem("user"));

  const elementRef = useRef();
  const handleClose = () => setShow(false);

  // return boolean if current url is trip creation page or not
  const getUrl = () => {
    let path = location.pathname;
    return path.includes("/trip");
  };

  //passes attraction to TripPlanner comp
  const handleClick = (e, data) => {
    if (!getUrl()) {
      setShow(true);
    } else {
      props.addAttraction(
        elementRef.current.innerHTML,
        props.image_url,
        props.attractionId
      );
    }
  };

  return (
    <div className="attraction-card">
      <img className="card-img-top" src={props.image_url} alt={props.name} />
      <div className="favorite-icon">
        <button className="icon-holder" onClick={handleClick}>
          <FontAwesomeIcon icon={faHeart} className="highlight" inverse />
        </button>
      </div>
      <div className="user-rating">{props.rating}</div>
      <div className="attraction-summary">
        <p ref={elementRef}>{props.name}</p>
        <div className="rating-container">
          <StarRatings
            rating={Number(props.rating)}
            starRatedColor="#e7bf39"
            starDimension="20px"
            starSpacing="2px"
            numberOfStars={5}
            name="rating"
          />
          <span className="rating-count">({props.reviewsCount})</span>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} dialogClassName="my-modal w-50">
        <Modal.Header closeButton>
          <Modal.Title>{`Create a Plan for your ${props.location} Trip`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ShowMessage location={props.location} {...user} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

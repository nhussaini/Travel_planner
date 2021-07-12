import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ShowMessage from "components/ShowMessage";
import StarRatings from "react-star-ratings";

export default function ThingToDo(props) {
  const [show, setShow] = useState(false);
  console.log("props in ThingToDo cmp line 11==>", props);
  console.log("thing to do id:=====>", props.attractionId);

  //get the logged in userdata from local storge
  let user = JSON.parse(localStorage.getItem("user"));
  //get the user id
  const id = user ? user.id : null;
  const elementRef = useRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //passes attraction to TripPlanner comp
  const handleClick = (e, data) => {
    console.log(elementRef.current);
    console.log("element ref***", elementRef);
    // handleShow();
    // console.log("element.html=>", elementRef.current.innerHTML);
    props.addAttraction(
      elementRef.current.innerHTML,
      props.image_url,
      props.attractionId
    );
  };
  return (
    <div className="attraction-card">
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
        <div className="rating-container">
          {/* <Rating rating={props.rating} />{" "} */}
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
      <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
        <Modal.Header closeButton>
          <Modal.Title>{`Let's Create a Plan for your ${props.location} Trip`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user ? <ShowMessage location={props.location} {...user} /> : null}
        </Modal.Body>
      </Modal>
    </div>
  );
}

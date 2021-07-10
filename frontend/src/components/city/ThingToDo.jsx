import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

export default function ThingToDo(props) {
  const elementRef = useRef();
  const handleClick = (e, data) => {
    console.log(elementRef.current);
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
    </div>
  );
}

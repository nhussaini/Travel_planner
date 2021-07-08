import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

export default function ThingToDo(props) {
  return (
    <div className="attraction-card card">
      <img className="card-img-top" src={props.image_url} alt={props.name} />
      <div className="favorite-icon">
        <FontAwesomeIcon icon={faHeart} size="lg" className="icon" inverse />
      </div>

      {/* <FontAwesomeIcon icon={faCheckSquare} size="lg" /> */}
      <FontAwesomeIcon icon={["far", faHeart]} />

      {/* <FontAwesomeIcon icon={faCar} size="lg" /> */}
      {/* <FontAwesomeIcon icon="fa-light fa-heart" /> */}
      <Rating rating={props.rating} />
      {/* <p>{props.reviewsCount}</p> */}
      <p>{props.name}</p>
      {/* <p>{props.address}</p> */}
      <p>{props.rating}</p>
      <p>{props.reviewsCount}</p>
      {/* <a href={props.urls}>{props.name}</a> */}
    </div>
  );
}

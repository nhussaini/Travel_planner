import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function ThingToDo(props) {
  return (
    <div className="attraction-card card">
      <img className="card-img-top" src={props.image_url} alt={props.name} />
      <div className="favorite-icon">
        <FontAwesomeIcon icon={faHeart} size="lg" className="icon" inverse />
      </div>
      {/* <FontAwesomeIcon icon={["far", faHeart]} /> */}
      <div className="user-rating">{props.rating}</div>
      <div className="attraction-summary">
        <p>{props.name}</p>
        <div>
          <Rating rating={props.rating} />{" "}
          <span class="rating-count">({props.reviewsCount})</span>
        </div>
      </div>
    </div>
  );
}

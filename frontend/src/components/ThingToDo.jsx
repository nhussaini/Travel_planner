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
      {/* <p>{props.reviewsCount}</p> */}
      <div className="user-rating">{props.rating}</div>
      <div className="attraction-summary">
        <div>
          <Rating rating={props.rating} />{" "}
          <span class="rating-count">({props.reviewsCount})</span>
        </div>

        <p>{props.name}</p>
        <p></p>
      </div>

      {/* <p>{props.address}</p> */}

      {/* <a href={props.urls}>{props.name}</a> */}
    </div>
  );
}

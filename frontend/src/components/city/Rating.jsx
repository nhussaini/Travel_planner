import ReactStars from "react-rating-stars-component";
export default function Rating(props) {
  // const rating = <ReactStars count={5} size={24} activeColor="#ffd700" />;
  function roundRating(rating) {
    if (rating > 4.5) {
      return Math.ceil(rating);
    } else if (rating < 4.5) {
      return Math.floor(rating);
    } else {
      return rating;
    }
  }

  return (
    <div className="rating">
      <ReactStars
        count={5}
        size={24}
        activeColor="#ffd700"
        value={roundRating(props.rating)}
        isHalf
        edit={false}
      />
      {/* <span>{props.reviewsCount}</span> */}
    </div>
  );
}

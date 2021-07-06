import ReactStars from "react-rating-stars-component";
export default function Rating(props) {
  // const rating = <ReactStars count={5} size={24} activeColor="#ffd700" />;

  return (
    <div className="rating">
      <ReactStars
        count={5}
        size={24}
        activeColor="#ffd700"
        value={props.rating}
        isHalf
        edit={false}
      />
    </div>
  );
}

import ReactStars from "react-rating-stars-component";
export default function Rating() {
  return (
    <div className="rating">
      <ReactStars count={5} size={24} activeColor="#ffd700" />
    </div>
  );
}

import "../styles/attractions.scss";

export default function ThingToDo(props) {
  return (
    <div className="attraction-card">
      <p>{props.name}</p>
      <p>{props.rating}</p>
      <p>{props.reviewsCount}</p>
    </div>
  );
}

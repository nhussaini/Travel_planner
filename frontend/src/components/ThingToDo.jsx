export default function ThingToDo(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.rating}</p>
      <p>{props.reviewsCount}</p>
    </div>
  );
}

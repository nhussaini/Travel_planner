import ThingToDo from "./ThingToDo";
import "../styles/attractions.scss";

export default function ThingsToDoList(props) {
  const sortedArray = [...props.thingsToDo]
    .sort((a, b) => b.user_ratings_total - a.user_ratings_total)
    .slice(0, 10);
  const allThingsToDo = sortedArray.map((thing) => {
    return (
      <ThingToDo
        key={thing.place_id}
        name={thing.name}
        // address={thing.name}
        rating={thing.rating}
        reviewsCount={thing.user_ratings_total}
        reference={thing.photos[0].photo_reference}
      />
    );
  });
  return (
    <div>
      <div>
        <h2 className="heading">
          {props.location ? `Top Attractions in ${props.location}` : ""}
        </h2>
      </div>
      <div className="things-to-do-container">{allThingsToDo}</div>
    </div>
  );
}

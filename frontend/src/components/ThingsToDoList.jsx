import ThingToDo from "./ThingToDo";
import "../styles/attractions.scss";

export default function ThingsToDoList(props) {
  console.log(props.thingsToDo);
  const sortedArray = [...props.thingsToDo]
    .sort((a, b) => b.user_ratings_total - a.user_ratings_total)
    .slice(0, 12);
  const allThingsToDo = sortedArray.map((thing) => {
    return (
      <ThingToDo
        key={thing.id}
        name={thing.name}
        address={thing.formatted_address}
        rating={thing.rating}
        reviewsCount={thing.user_ratings_total}
        image_url={thing.image_url}
      />
    );
  });
  return (
    <div>
      <div className="things-to-do-container">{allThingsToDo}</div>
    </div>
  );
}

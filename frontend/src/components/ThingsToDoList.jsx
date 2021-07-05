import ThingToDo from "./ThingToDo";

export default function ThingsToDoList(props) {
  const sortedArray = [...props.thingsToDo]
    .sort((a, b) => b.user_ratings_total - a.user_ratings_total)
    .slice(0, 9);
  const allThingsToDo = sortedArray.map((thing) => {
    return (
      <ThingToDo
        key={thing.place_id}
        name={thing.name}
        rating={thing.rating}
        reviewsCount={thing.user_ratings_total}
      />
    );
  });
  return (
    <div>
      ThingstoDoList
      {allThingsToDo}
      <ThingToDo />
    </div>
  );
}

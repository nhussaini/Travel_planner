export default function UserTripAttraction(props) {
  console.log("Rendering----");
  return (
    <div className="attraction">
      <img src={props.image_url} alt={props.name} />
      <h2 className="attraction-name">{props.name}</h2>
    </div>
  );
}

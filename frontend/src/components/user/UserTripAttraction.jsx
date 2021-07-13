export default function UserTripAttraction(props) {
  return (
    <div className="attraction">
      <img src={props.image_url} alt="" />
      <h2>{props.name}</h2>
    </div>
  );
}

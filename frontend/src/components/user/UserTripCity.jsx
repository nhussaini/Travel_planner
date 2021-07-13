import Button from "react-bootstrap/Button";

export default function userProfileCity(props) {
  function handleClick(e) {
    props.getTripData(props.id);
  }
  return (
    <div className="trip">
      <button as="href" onClick={handleClick}>
        <img src={props.image_url} alt="" />
        <h2>{props.short_name}</h2>
      </button>
    </div>
  );
}

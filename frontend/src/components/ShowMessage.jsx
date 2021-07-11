import { Button } from "react-bootstrap";

export default function ShowMessage(props) {
  function handleClick(e) {
    // history.push({
    //   pathname: `/trip/${id}/new`,
    //   state: {
    //     key: id,
    //     attractions: state.thingsToDo,
    //     locationData: state.locationData,
    //   },
    // });
  }
  return (
    <div>
      <p>
        Hi {props.first_name} {props.last_name}
      </p>
      <p>{`You don't have any plan for ${props.location} Let's create one!`}</p>
      <Button onClick={handleClick} />
    </div>
  );
}

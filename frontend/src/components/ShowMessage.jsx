import { Button } from "react-bootstrap";

export default function ShowMessage(props) {
  return (
    <div>
      <p>
        Hi {props.first_name} {props.last_name}
      </p>
      <p>{`You don't have any plan for ${props.location} Let's create one!`}</p>
      <Button href={`/trip/${props.location}/new`} />
    </div>
  );
}

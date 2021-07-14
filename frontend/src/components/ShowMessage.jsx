import { Button } from "react-bootstrap";

export default function ShowMessage({ first_name, last_name, id, location }) {
  return (
    <div className="text-center">
      {id ? (
        <div>
          <p>{` Hi ${first_name} ${last_name}`}</p>
          <p>{`Are you excited about making a plan for ${location}?`}</p>
          <Button href={`/trip/${location}/new`}>{`Let's Go`}</Button>
        </div>
      ) : (
        <div>
          <p>Hi Traveler!</p>
          <p>You need an account to create a trip plan!</p>
          <Button className="mx-2" href="/login" variant="success">
            Login
          </Button>
          <Button href="/register">Register</Button>
        </div>
      )}
    </div>
  );
}

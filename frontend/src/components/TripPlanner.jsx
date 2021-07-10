import { useLocation } from "react-router-dom";

export default function TripPlanner(props) {
  const location = useLocation();
  console.log("statekey", location.state);
  return <div>hello</div>;
}

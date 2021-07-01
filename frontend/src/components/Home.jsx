import Form from "./Form";
import axios from "axios";

export default function Home(props) {
  function getWeather(location) {
    console.log("From home---", location);
    axios.get("/weatherData").then((data) => console.log(data.data));
  }
  return (
    <div>
      Home
      <Form getWeather={getWeather} />
    </div>
  );
}

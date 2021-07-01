import Form from "./Form";

export default function Home(props) {
  function getWeather(location) {
    console.log("From home---", location);
  }
  return (
    <div>
      Home
      <Form getWeather={getWeather} />
    </div>
  );
}

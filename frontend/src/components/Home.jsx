import { useState } from "react";

import Form from "./Form";
import ImagesList from "./ImagesList";
import axios from "axios";

export default function Home(props) {
  const [location, setLocation] = useState(null);
  const [images, setImages] = useState([]);

  function getWeather(userInput) {
    console.log(userInput);
    // setLocation(null);
    console.log("Before setting", location);
    setLocation(userInput);
    // console.log("From home---", location);
    // axios.get("/weatherData").then((data) => console.log(data.data));
    console.log("after setting", location);
    axios.post("/imageTest", { userInput: location }).then((data) => {
      console.log("data", data);
      setImages(data.data);
    });
    // axios.get("/imageData").then((data) => {
    //   console.log("Coming from home", data.data);
    //   setImages(data.data);
    // });
  }
  return (
    <div>
      Home
      <Form getWeather={getWeather} />
      <ImagesList location={location} images={images} />
    </div>
  );
}

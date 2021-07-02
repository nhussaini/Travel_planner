import { useState } from "react";

import Form from "./Form";
import ImagesList from "./ImagesList";
import axios from "axios";

export default function Home(props) {
  const [images, setImages] = useState(null);

  function getWeather(location) {
    // console.log("From home---", location);
    // axios.get("/weatherData").then((data) => console.log(data.data));
    axios.get("/imageData").then((data) => {
      console.log("Coming from home", data.data);
      setImages(data.data);
    });
  }
  return (
    <div>
      Home
      <Form getWeather={getWeather} />
      <ImagesList images={images} />
    </div>
  );
}

import { useState, useEffect } from "react";

import Form from "./Form";
import ImagesList from "./ImagesList";
import axios from "axios";

export default function Home(props) {
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.post("/imageTest", { userInput: location }).then((data) => {
      console.log("data", data);
      setImages(data.data);
    });
  }, [location]);

  function getWeather(userInput) {
    console.log(userInput);
    // setLocation(null);
    setLocation(userInput);
  }
  return (
    <div>
      Home
      <Form getWeather={getWeather} />
      <ImagesList location={location} images={images} />
    </div>
  );
}

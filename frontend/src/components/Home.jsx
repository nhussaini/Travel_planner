import { useState, useEffect } from "react";

import Form from "./Form";
import ImagesList from "./ImagesList";
import axios from "axios";

export default function Home(props) {
  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    //fetch images for specific location
    axios.post("/imageData", { userInput: location }).then((data) => {
      console.log("data", data);
      setImages(data.data);
    });

    //fetch weather information for a specific location
    // axios.post("/weatherData", { userInput: location }).then((data) => {
    //   console.log("weather data:", data);
    // });
  }, [location]);

  // useEffect(() => {
  //   axios.post("/weather", {userInput: location}).then((data)=>{
  //     console.log("weather data:", data);
  //   })
  // });

  function setLocationState(userInput) {
    console.log(userInput);
    // setLocation(null);
    setLocation(userInput);
  }
  return (
    <div>
      Home
      <Form setLocationState={setLocationState} />
      <ImagesList location={location} images={images} />
    </div>
  );
}

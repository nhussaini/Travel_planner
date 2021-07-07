import { useState, useEffect } from "react";
import axios from "axios";

function useCityData() {
  // const [location, setLocation] = useState("");
  // const [images, setImages] = useState([]);
  // const [weather, setWeather] = useState([]);
  // const [locationData, setLocationData] = useState([]);
  // const [thingsToDo, setThingsToDo] = useState([]);

  const [state, setState] = useState({
    location: "Toronto  ",
    images: [],
    weather: [],
    locationData: [],
    thingsToDo: [],
  });

  // useEffect(() => {
  //   //fetch images for specific location
  //   if (state.location) {
  //     axios.post("/imageData", { userInput: state.location }).then((data) => {
  //       console.log("data", data);
  //       setState.images(data.data);
  //     });
  //     //fetch weather information for a specific location
  //     axios.post("/weatherData", { userInput: state.location }).then((data) => {
  //       setState.weather(data.data.data);
  //       // console.log("weather data:", data.data.data);
  //     });
  //     // Fetch Summary information for Location
  //     axios
  //       .post("/locationSummary", { userInput: state.location })
  //       .then((data) => {
  //         setState.locationData(data.data);
  //         console.log("Location data---", data.data);
  //       });
  //     // Fetch thingstodo for a location
  //     axios.post("/thingsToDo", { userInput: state.location }).then((data) => {
  //       setState.thingsToDo(data.data);
  //       console.log("ThingstoDo data---", data);
  //     });
  //   }
  // }, [state.location]);

  function setLocationState(userInput) {
    console.log(userInput);
    // setLocation(null);
    // setState.location(userInput);
    return setState((prev) => ({
      ...prev,
      location: userInput,
    }));
  }

  return { state, setLocationState };
}

export { useCityData };

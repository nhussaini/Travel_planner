import { useState, useEffect } from "react";
import axios from "axios";

function useCityData() {
  const [state, setState] = useState({
    location: "",
    images: [],
    weather: [],
    locationData: [],
    thingsToDo: [],
  });
  // useEffect(() => {
  //   if (state.location) {
  //     axios
  //       .post("/cities/getCityData", { userInput: state.location })
  //       .then((data) => {
  //         // setState(() => ({
  //         //   locationData: data.data.cityData,
  //         //   images: data.data.imageData,
  //         //   thingsTodo: data.data.googleData,
  //         // }));
  //         console.log(data.data);
  //       });
  //   }
  // }, [state.location]);

  // useEffect(() => {
  //   //fetch images for specific location
  //   if (state.location) {
  //     axios.post("/imageData", { userInput: state.location }).then((data) => {
  //       console.log("data", data);
  //       setState((prev) => ({
  //         ...prev,
  //         images: data.data,
  //       }));
  //     });
  //     //fetch weather information for a specific location
  //     axios.post("/weatherData", { userInput: state.location }).then((data) => {
  //       setState((prev) => ({
  //         ...prev,
  //         weather: data.data.data,
  //       }));
  //     });
  //     // Fetch Summary information for Location
  //     axios
  //       .post("/locationSummary", { userInput: state.location })
  //       .then((data) => {
  //         setState((prev) => ({
  //           ...prev,
  //           locationData: data.data,
  //         }));
  //       });
  //     // Fetch thingstodo for a location
  //     axios.post("/thingsToDo", { userInput: state.location }).then((data) => {
  //       setState((prev) => ({
  //         ...prev,
  //         thingsToDo: data.data,
  //       }));
  //     });
  //   }
  // }, [state.location]);

  function setLocationState(userInput) {
    console.log(userInput);
    setState((prev) => ({
      ...prev,
      location: userInput,
    }));
    // window.location.href = `/cities/${userInput}`;
  }

  return { state, setLocationState };
}

export { useCityData };

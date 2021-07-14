import { useState} from "react";

function useCityData() {
  const [state, setState] = useState({
    location: "",
    images: [],
    weather: [],
    locationData: [],
    thingsToDo: [],
  });
  

  function setLocationState(userInput) {
    setState((prev) => ({
      ...prev,
      location: userInput,
    }));
  }

  return { state, setLocationState };
}

export { useCityData };

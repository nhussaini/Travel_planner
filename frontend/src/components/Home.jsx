import { useCityData } from "../hooks/useCityData";
import { React, useState } from "react";

import Form from "./Form";
import WeatherList from "./WeatherList";
import ImagesList from "./ImagesList";
import CityDetails from "./CityDetails";
import ThingsToDoList from "./ThingsToDoList";
import FlightData from "./FlightData";
import TrendingCities from "./TrendingCities";
import axios from "axios";
import TrendingCity from "./TrendingCity";
import UserProfile from "./UserProfile";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ToDo from "./ToDo";

export default function Home(props) {
  const { state, setLocationState } = useCityData();
  // const { state } = useTest();
  console.log(state.location);

  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" },
  ]);

  return (
    <div>
      <Navbar />
      Home
      <Form setLocationState={setLocationState} />
      {/* <CityDetails
        locationData={state.locationData}
        thingsToDo={state.thingsToDo}
      />
      <ThingsToDoList location={state.location} thingsToDo={state.thingsToDo} />
      <ImagesList location={state.location} images={state.images} />
      <WeatherList location={state.location} weather={state.weather} /> */}
      <TrendingCities />
      <UserProfile />
      <ToDo key={index} index={index} todo={todo} />
      <TodoForm addTodo={addTodo} />
      <Footer />
    </div>
  );
}

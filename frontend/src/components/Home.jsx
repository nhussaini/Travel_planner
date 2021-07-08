import { useCityData } from "../hooks/useCityData";
import { React, useState } from "react";
import "../styles/ToDo.scss";
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
import ToDoForm from "./ToDoForm";

export default function Home(props) {
  const { state, setLocationState } = useCityData();
  // const { state } = useTest();
  console.log(state.location);

  //these are for the todo list and can be moved later
  const [todos, setTodos] = useState([
    {
      text: "Add to your ToDo List! Type your task and hit enter.",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

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
      <div className="todo-border">
        {todos.map((todo, index) => (
          <ToDo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}

        <ToDoForm addTodo={addTodo} />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

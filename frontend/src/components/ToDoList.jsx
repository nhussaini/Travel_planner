import { React, useState } from "react";
import axios from "axios";
import "../styles/ToDo.scss";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

export default function ToDoList() {
  const [todos, setTodos] = useState([
    {
      text: "Add to your ToDo List - type your task and hit enter.",
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

  // function toDoStorage() {
  //   axios.post();
  // }

  return (
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
  );
}

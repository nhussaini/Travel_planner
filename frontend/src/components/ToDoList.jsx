import { React, useState, useEffect } from "react";
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

  // const addTodo = (text) => {
  //   const newTodos = [...todos, { text }];
  //   setTodos(newTodos);
  // };

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos((prev) => ({
      ...prev,
      newTodos,
    }));
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
  useEffect(() => {
    // Update the document title using the browser API
    axios.get("/users/todo").then((data) => {
      for (let todo of data.data) {
        addTodo(todo.description);
      }
      // const newTodos = [...todos, { text: data.data[0].description }];
      // setTodos(newTodos);

      console.log("todo data=>", data.data);
    });
  }, []);

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

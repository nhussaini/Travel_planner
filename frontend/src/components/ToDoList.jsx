import { React, useState, useEffect } from "react";
import axios from "axios";
import "../styles/ToDo.scss";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

export default function ToDoList() {
  // const [todos, setTodos] = useState([
  //   {
  //     text: "Add to your ToDo List - type your task and hit enter.",
  //     isCompleted: false,
  //   },
  // ]);

  //state for todos
  const [state, setState] = useState({
    todos: [],
  });

  //add todo in the frontend
  const addTodo = (text) => {
    const newTodos = [...state.todos, { description: text }];
    setState((prev) => ({
      ...prev,
      todos: newTodos,
    }));
  };

  //remove a todo
  const removeTodo = (id, index) => {
    axios
      .delete(`/users/todo/${id}`)
      .then((data) => console.log("data after deletion", data));

    const newTodos = [...state.todos];
    newTodos.splice(index, 1);
    // setTodos(newTodos);
    console.log("deleting a todo=>", newTodos);
    setState((prev) => ({
      ...prev,
      todos: newTodos,
    }));
    console.log("index==>", index);
  };

  //fetch todos from the backend
  useEffect(() => {
    // Update the document title using the browser API
    axios.get("/users/todo").then((data) => {
      setState((prev) => ({
        ...prev,
        todos: data.data,
      }));

      console.log("todo data=>", data.data);
    });
  }, []);

  return (
    <div className="todo-border">
      {state.todos.map((todo, index) => (
        <ToDo
          key={index}
          index={index}
          todo={todo}
          // completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}

      <ToDoForm addTodo={addTodo} />
    </div>
  );
}

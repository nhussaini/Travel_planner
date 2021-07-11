import axios from "axios";
import { React, useState } from "react";
import "../styles/ToDo.scss";

export default function ToDoForm({ addTodo, userId }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/users/todo", { userInput: value, userId: userId })
      .then((data) => {
        console.log(data);
      });
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Enter task..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

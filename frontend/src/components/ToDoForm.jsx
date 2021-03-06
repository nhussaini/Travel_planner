import { React, useState } from "react";
import "../styles/ToDo.scss";

export default function ToDoForm({ addTodo, userId }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
        placeholder="Enter a task..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

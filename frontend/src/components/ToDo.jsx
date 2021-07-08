import { React } from "react";
import "../styles/ToDo.scss";

export default function ToDo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo-container">
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
        <div className="todo-buttons">
          <button
            className="todo-complete-btn"
            onClick={() => completeTodo(index)}
          >
            ✓
          </button>
          <button className="todo-delete-btn" onClick={() => removeTodo(index)}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}

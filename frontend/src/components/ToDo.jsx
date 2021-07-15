import { React } from "react";
import "../styles/ToDo.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ToDo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo-container">
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo}
        <div className="todo-buttons">
          <button className="todo-delete-btn" onClick={() => removeTodo(index)}>
            <FontAwesomeIcon icon={faTrash} size="xs" className="todo-delete" />
          </button>
        </div>
      </div>
    </div>
  );
}

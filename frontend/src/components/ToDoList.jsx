import "../styles/ToDo.scss";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";

export default function ToDoList(props) {
  return (
    <div className="todo-border">
      {props.todos.map((todo, index) => (
        <ToDo
          key={index}
          index={index}
          todo={todo}
          removeTodo={props.removeTodo}
        />
      ))}

      <ToDoForm addTodo={props.addTodo} />
    </div>
  );
}

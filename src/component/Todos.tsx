import Todo from "../models/todo";
import classes from "./Todos.module.css";

const Todos = (props: {
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
}) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <li onClick={() => props.onRemoveTodo(item.todoId)} key={item.todoId}>
          {item.todoText}
        </li>
      ))}
    </ul>
  );
};

export default Todos;

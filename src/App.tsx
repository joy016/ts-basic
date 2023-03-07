import { useState } from "react";
import NewTodo from "./component/NewTodo";
import Todos from "./component/Todos";
import Todo from "./models/todo";

function App() {
  const [newTodo, setNewTodo] = useState<Todo[]>([]);

  const onnAddTodo = (todoText: string) => {
    const newAddTodo = new Todo(todoText);
    setNewTodo((prevTodos) => prevTodos.concat(newAddTodo));
  };

  const removeTodo = (todoId: string) => {
    setNewTodo((removeTodo) =>
      removeTodo.filter((todo) => todo.todoId !== todoId)
    );
  };
  return (
    <div className="App">
      <NewTodo onnAddTodo={onnAddTodo} />
      <Todos items={newTodo} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;

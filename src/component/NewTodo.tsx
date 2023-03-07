import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onnAddTodo: (text: string) => void }> = (props) => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    props.onnAddTodo(enteredText);
    todoInputRef.current!.value = "";
  };
  return (
    <form className={classes.form} onSubmit={addTodoHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoInputRef} />

      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;

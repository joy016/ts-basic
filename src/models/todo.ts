class todo {
  todoText: string;
  todoId: string;

  constructor(todo: string) {
    this.todoText = todo;
    this.todoId = new Date().toISOString();
  }
}

export default todo;

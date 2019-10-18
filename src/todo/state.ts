import { store } from "react-easy-state";

export interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const app = store({
  lastId: 0,
  todos: new Array<Todo>(),
  add(text: string) {
    text = text.trim();

    if (text === '') {
      throw new Error('Cannot add an empty to do.');
    }

    if (app.todos.find(t => t.text === text)) {
      throw new Error('Cannot add a duplicate to do.');
    }

    app.todos.push({
      id: ++app.lastId,
      text,
      done: false
    });
  },
  remove(todo: Todo) {
    const index = app.todos.indexOf(todo);
    app.todos.splice(index, 1);
  },
  removeDone() {
    app.todos = app.todos.filter(t => !t.done);
  },
  sort() {
    app.todos = app.todos.sort((a, b) => a.text.localeCompare(b.text));
  }
});
import * as React from 'react';
import { view } from 'react-easy-state';
import { app } from './state';
import { TodoInput } from './TodoInput';
import { TodoItem } from './TodoItem';
import './styles.less';

export const TodoList = view(function TodoList() {
  return (
    <div className="todo-app">
      <h1 className="title">To Do List</h1>
      <TodoInput />
      <ul className="todo-list">
        {app.todos.map(t =>
          <TodoItem key={t.id} todo={t} />
        )}
      </ul>
      <br />
      <button className="btn btn-sm btn-info" onClick={e => app.sort()}>Sort</button>
      { ' ' }
      <button className="btn btn-sm btn-danger" onClick={e => app.removeDone()}>Remove Done</button>
    </div>
  );
});
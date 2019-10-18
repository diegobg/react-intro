import * as React from 'react';
import { view, store } from 'react-easy-state';
import { app } from './state';

export const TodoItem = view(function TodoItem({ todo }) { 
  const state = store({
    editing: false,
    text: todo.text
  });

  const li = {
    onDoubleClick() {
      if (todo.done) {
        return;
      }

      state.editing = true;
      state.text = todo.text;
    }
  };

  const text = {
    value: state.text,
    onChange(e) {
      state.text = e.target.value;
    },
    onKeyUp(e) {
      const { keyCode } = e;

      if (keyCode === 13 || keyCode === 27) {
        state.editing = false;
      }

      if (e.keyCode === 13) {
        todo.text = state.text;
      }
    }
  };
  
  const check = {
    checked: todo.done,
    disabled: state.editing,
    onChange(e) {
      todo.done = e.target.checked;
    }
  };

  const button = {
    disabled: state.editing,
    onClick() {
      app.remove(todo);
    }
  };

  return (
    <li className="todo-item" {...li}>
      <input
        type="checkbox"
        {...check}
      />
      { state.editing ?
        <input 
          type="text" 
          className="form-control" 
          {...text}
          /> :
        <span>{todo.text}</span>
      }
      <button
        className="btn btn-sm btn-danger"
        {...button}
      >
        <span>&times;</span>
    </button>
    </li>
  );
});
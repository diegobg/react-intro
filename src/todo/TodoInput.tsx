import * as React from 'react';
import { view, store } from 'react-easy-state';
import { app } from './state';

export const TodoInput = view(function TodoInput() {
  const state = store({
    text: '',
    error: ''
  });
  
  const input = {
    className: `form-control${state.error ? ' is-invalid' : ''}`,
    value: state.text,
    onChange(e) {
      state.text = e.target.value;
      state.error = '';
    },
    onKeyDown(e) {
      if (e.keyCode === 13) {
        try {
          app.add(state.text);
          state.text = '';
        }
        catch (err) {
          state.error = err.message;
        }
      }
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        {...input}
      />
      <div className="invalid-feedback">{state.error}</div>
    </div>
  );
});
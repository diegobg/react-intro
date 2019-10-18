import * as React from 'react';
import { view, store } from 'react-easy-state';

export const Hello = view(function Hello() {
  const state = store({
    value: 'Hello from React!',
    onChange: function (e) {
      state.value = e.target.value;
    }
  });

  return (
    <div id="hello-react">
      <input className="form-control" type="text" {...state} />
      <h1>{state.value}</h1>
    </div>
  );
});
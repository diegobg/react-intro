import * as React from 'react';
import { render } from 'react-dom';
import { TodoList } from './todo/TodoList';

render(<TodoList />, document.getElementById('app-root'));

if (module['hot']) {
  module['hot'].accept();
}

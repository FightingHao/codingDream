/*** examples/src/index.js ***/
import React from 'react';
import { render } from 'react-dom';
import MyComponent from '../../src';
const App = () => (
  <MyComponent size='36' color='red' />
);
render(<App />, document.getElementById("root"));

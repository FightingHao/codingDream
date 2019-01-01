import React from 'react';
import ReactDOM from 'react-dom';
import ClockContainer from './Clock/index.js';

ReactDOM.render(<ClockContainer time={new Date()} />, document.getElementById('root'));

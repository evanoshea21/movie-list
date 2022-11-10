import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import {movies1, movies2} from './sampleData/data.js';
window.movies1 = movies1;

ReactDOM.render(<App />, document.getElementById('app'));


import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import {movies1, movies2} from '../sampleData/data.js';

const {useState} = React;



const App = (props) => {
const [movielist, setlist] = useState(movies1);
const [areNoResults, setAreNoResults] = useState(false);


  return (
  // <div>Hello World!</div>
  <div>
    <h1 className='header'>Movie List</h1>
    <Search setNoResult = {(b) => setAreNoResults(b)} setList = {(list) => setlist(list)}/>
    <MovieList areNoResults={areNoResults} movies={movielist}/>
  </div>
  );
};

export default App;

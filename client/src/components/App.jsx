import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import {movies1, movies2} from '../sampleData/data.js';
import AddMovie from './AddMovie.jsx';
import WatchedButtons from './WatchedButtons.jsx';
const {useState} = React;



const App = (props) => {
const [movielist, setlist] = useState(movies1);
const [areNoResults, setAreNoResults] = useState(false);

  function handleAdd(e) {
  e.preventDefault();
  console.log('this is e', e.target);
  // console.log('value', e.target.movieName.value);
  var copyArr = [{title: e.target.movieName.value}, ...movielist];
  movies1.unshift({title: e.target.movieName.value});
  console.log('this is the copy\n', copyArr);
  setlist(copyArr);
    }
  function handleRender(inputlist) {
    // debugger;
    console.log('handling render with list: ..', inputlist);
    // console.log(setlist);

    setlist(inputlist);
  }


  return (
  // <div>Hello World!</div>
  <div>
    <h1 className='header'>Movie List</h1>
    <AddMovie handleAdd={handleAdd}/>
    <Search setNoResult = {(b) => setAreNoResults(b)} setList={(list) => setlist(list)}/>
    <MovieList handleRender={handleRender} areNoResults={areNoResults} movies={movielist}/>
  </div>
  );
};

export default App;

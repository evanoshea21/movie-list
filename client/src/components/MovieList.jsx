import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const {useState} = React;

const MovieList = ({movies, areNoResults, handleRender}) => {
console.log('MovieList?');
// console.log('set NO result', setNoResult);


if(areNoResults) {
  return (
    <div className='movie-entry'>
      No results brochacho...
    </div>
  )
} else  { //if Results, show movies
  console.log('log inside movie List', movies);
  console.log('Rendering Movie List..');
  return (
  <div>
    {movies.map( (aMovie, i) => <MovieEntry handleRender={handleRender} movie={aMovie} key={i}/>)}
  </div>
  );
}
};


export default MovieList;
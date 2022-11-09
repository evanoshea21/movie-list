import React from 'react';
import MovieEntry from './MovieEntry.jsx';

const {useState} = React;

const MovieList = ({movies, areNoResults}) => {
console.log('MovieList?');
// console.log('set NO result', setNoResult);

if(areNoResults) {
  return (
    <div className='movie-entry'>
      No results brochacho...
    </div>
  )
} else  { //if Results, show movies
  return (
  <div>
    {movies.map( (aMovie, i) => <MovieEntry movie={aMovie} key={i}/>)}
  </div>
  );
}
};


export default MovieList;
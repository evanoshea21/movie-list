import React from 'react';
import {movies1, movies2} from '../sampleData/data.js';

const {useState} = React;

const MovieEntry = ({movie, handleRender}) => {
// initialized watched status below (first run through)
if(movie.watchedit === undefined) {
  movie.watchedit = false;
}

const watchButtonText = () =>  (movie.watchedit ? 'Watched' : 'To Watch');
const classes = (movie.watchedit ? 'watched' : 'to-watch') + ' btn' ///movie.watchedStatus + ' btn';

  return (
  <div className='movie-entry'>
    <span className='movie-title'>{movie.title}</span>
    <button className={classes} onClick={ () => { //on Watched Button click
    console.log('button click');
      movie.watchedit = !movie.watchedit;
      // var wi = watchButtonText();
      var copyMovieList = movies1.slice();
        handleRender(copyMovieList);
      }}>{watchButtonText()}</button>
    {/* <button onClick={() => {setCount(count+1)}}>Counter {count}</button> */}
  </div>
  );
};

//<button className={movie.watchStatus}> {movie.watchStatus} </button>

export default MovieEntry;
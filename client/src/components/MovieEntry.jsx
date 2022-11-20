import React from 'react';
import {movies1, movies2} from '../grabData/data.js';

const {useState, useEffect} = React;

const MovieEntry = ({movie, putReq, delReq}) => {
  const watchButtonText = (click) => {
    if(click) {
      return buttonText === 'Watched' ? 'To Watch' : 'Watched';
    } else {
      return (movie.watched ? 'Watched' : 'To Watch')
    }
  };
  const getClasses = (click) => {
    if(click) {
      return myClasses === 'watched btn' ? 'to-watch btn' : 'watched btn';
    } else {
      return (movie.watched ? 'watched' : 'to-watch') + ' btn'
    }
  };
  // const [watchToggle, setToggle] = useState(false);
  const [myClasses, setClasess] = useState(getClasses());
  const [buttonText, setButtonText] = useState(watchButtonText());

  return (
  <div className='movie-entry'>
    <span className='movie-title'>{movie.title}</span>
    <div className='the-btns'>
      <button className={myClasses} onClick={ () => { //on Watched Button click
      putReq(movie.title);
      setClasess(getClasses(true));
      setButtonText(watchButtonText(true));

    //updateWATCHED with putReq

}}>{buttonText}</button>
    <button onClick={(e) => {e.preventDefault(); delReq(movie.title)}}className='btn delete-btn'>X</button>
    </div>

    {/* <button onClick={() => {setCount(count+1)}}>Counter {count}</button> */}
  </div>
  );
};

//<button className={movie.watchStatus}> {movie.watchStatus} </button>

export default MovieEntry;
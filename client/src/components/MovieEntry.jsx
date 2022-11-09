import React from 'react';

const {useState} = React;

const MovieEntry = ({movie}) => {
const [active, setActive] = useState(false);
// const [count, setCount] = useState(0);

  return (
  <div className='movie-entry'>
    <span className='movie-title'>{movie.title}</span>
    <button className={active ? 'btn' : 'btn-false'} onClick={() => {setActive(!active)}}>To Watch</button>
    {/* <button onClick={() => {setCount(count+1)}}>Counter {count}</button> */}
  </div>
  );
};

export default MovieEntry;
import React, {useState, useRef} from 'react';
import {movies1, movies2} from '../sampleData/data.js';


const AddMovie = ({handleAdd}) => {
  return (
  <div className='add-movie'>
    <form onSubmit={(e) => handleAdd(e)}>
      <input type="text" id="movieName" name="movieName"/>
      {/* <input type="submit" value='Add Movie'> */}
      <input className ='btn' type="submit" value="Add Movie"></input>
    </form>
  </div>
  );
};

export default AddMovie;

// onClick={(e) => { //Search CLICK

//   e.preventDefault();
//   console.log('clicked add Movie');
//   handleAdd();
//   // console.log('back here??');


//   }
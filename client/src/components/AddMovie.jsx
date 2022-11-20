import React, {useState, useRef} from 'react';


const AddMovie = ({postReq}) => {
  return (
  <div className='add-movie'>
    <form onSubmit={(e) => {e.preventDefault(); postReq(e.target.movieName.value)}}>

      <input type="text" id="movieName" name="movieName"/>
      <input className ='btn' type="submit" value="Add Movie"></input>

    </form>
  </div>
  );
};

export default AddMovie;
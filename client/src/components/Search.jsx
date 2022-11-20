import React, {useState, useRef} from 'react';
import {movies1, movies2} from '../grabData/data.js';
// import {Parse} from '../grabData/parse.js';
// const Parse = require('../grabData/parse.js');
//import AXIOUS
// const Axios = require(..);


const Search = ({getReq, setList, setNoResult}) => {

  return (
  <div className='search'>
    <form onSubmit={(e) => {e.preventDefault(); getReq('/' + e.target.title.value)}}>
      <input type="text" name="title" placeholder="Search a Title.."></input>
      <button type="submit">Search</button>

      <button onClick={(e) => { // ALL movies button
        e.preventDefault();
        getReq();
        setNoResult(false);
        //AXIOS.get

        } }>All Movies</button>
    </form>
  </div>
  );
};

export default Search;
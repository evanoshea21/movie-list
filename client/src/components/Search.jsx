import React, {useState, useRef} from 'react';
import {movies1, movies2} from '../sampleData/data.js';


const Search = ({setList, setNoResult}) => {
  // console.log('movies2\n\n', movies2);
  // console.log('setList\n\n', setList);

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);
// console.log(result);

  const inputRef = useRef(null);
  // const [searchedMov, setSearchedMov] = useState([]);

  function handleSearch() {
    var inputVal = inputRef.current.value;

    var filteredArr = movies1.filter(movie => movie.title.indexOf(inputVal) !== -1);
    if(filteredArr.length === 0) {
      setNoResult(true);
    } else {
      setNoResult(false);
    setList(filteredArr);
    }
    //filter from
  }

  return (
  <div className='search'>
    <form>
      <textarea placeholder='Search a Title..'ref={inputRef}></textarea>

      <button onClick={(e) => { //SEARCH button

        e.preventDefault();
        console.log('clicked search');
        handleSearch();


        }}>Search</button>

      <button onClick={(e) => { // ALL movies button

        e.preventDefault();
        setNoResult(false);
        setList(movies1);

        } }>All Movies</button>
    </form>
  </div>
  );
};

export default Search;
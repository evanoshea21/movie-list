import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import {movies1, movies2} from '../grabData/data.js';
import AddMovie from './AddMovie.jsx';
import WatchedButtons from './WatchedButtons.jsx';
const axios = require('axios');
const {useState, useEffect} = React;


const App = (props) => {
const [movielist, setlist] = useState([]);
const [areNoResults, setAreNoResults] = useState(false);
const [reRender, setRender] = useState(false);

  function postReq(movieName) { //POST request postReq(jsonObj)
    console.log('postReq in APP>JSX');
    axios.post('/movies', {title: movieName})
    .then((res) => {
      getReqSetList();
    })
  }
  function delReq(movieName) { //POST request postReq(jsonObj)
    console.log('DelReq in APP>JSX-> ', movieName);
    axios.delete(`/movies/${movieName}`)
    .then((res) => {
      getReqSetList();
    })
  }
  function putReq(movieName) { //POST request postReq(jsonObj)
    axios.put(`/movies/${movieName}`)
    .then((res) => {
      console.log('putReq response->', res);
    })
  }

  useEffect(() => { //mounts movies on initialize
    console.log('MOUNTING');
    axios.get('/movies')
    .then((res) => {
      setlist(res.data);
    })
  }, []);

  function getReqSetList(endpoint = '') {
    const url = `/movies${endpoint}`;
    console.log('getReqSetList Fired URL->', url);

    axios.get(url)
    .then((res) => {
      // console.log('Response AXIOS->', res.data); //all our movies
      setlist(res.data);
    })
  }

  return (
  // <div>Hello World!</div>
  <div>
    <h1 className='header'>Movie List</h1>
    <AddMovie postReq={postReq}/>
    <Search getReq={getReqSetList} setNoResult={(b) => setAreNoResults(b)} setList={(list) => setlist(list)}/>
    <MovieList delReq={delReq} putReq={putReq} areNoResults={areNoResults} movies={movielist}/>
  </div>
  );
};

export default App;

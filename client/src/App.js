import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList savedlist={savedList} />
      <div>
        <Route exact path="/" render={props => <MovieList movies = {movieList}/>}/>
        <Route path="/movies/:id" render={props => <Movie addToSavedList = {addToSavedList}/>}/>
      </div>
    </div>
  );
};

export default App;

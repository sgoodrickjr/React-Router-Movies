import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import MovieList from './MovieList.js';
import { Link } from 'react-router-dom';

import MovieCard from './MovieCard.js'

const Movie = (props) => {
  const [movie, setMovie] = useState();
 
  const {id} = useParams();
  //console.log("Params", id);

  //const movieSelection = props.movies.find(movie => `${movie.id}` === params.id);

  useEffect(() => {

    //const id = props.match.id;
    //const {id} = useParams();
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {

          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });

  },[id]);
  
  
  const saveMovie = () => {
    const addToSavedList = props.addToSavedList;
    addToSavedList(movie)
  }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return <MovieCard movie={movie} saveMovie = {saveMovie}/>

}

export default Movie;

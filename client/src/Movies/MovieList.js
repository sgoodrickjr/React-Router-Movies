import React from 'react';
import { Link} from 'react-router-dom';

import Movie from './Movie.js';

import MovieCard from './MovieCard.js';

const MovieList = props => {

  if(props.movies) {
    return (
      <div className="movie-list">
        {props.movies.map(movie => (
          <MovieCard movie={movie} addToSavedList = {props.addToSavedList}/>
          //<Movie key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
  else {
    return <div>Loading...</div>
  }
}


export default MovieList;

import React from 'react';
import MovieItem from './MovieItem';

const MovieList = (props) => {

  return (
    <section className="movie-list-continer">
      {props.movies.map((movie)=>(<MovieItem key={movie.id} id={movie.id} onDeleteMovie={props.onDeleteMovie} title={movie.title} description={movie.description} />))}
    </section>
  );
};

export default MovieList;
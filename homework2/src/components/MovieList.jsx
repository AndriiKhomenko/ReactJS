import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({films}) => (
  <ul>
    {films.map(film => (
      <li key={film.id}>
        <MovieCard
          title={film.title}
          poster_path={film.poster_path}
          overview={film.overview}
        />
      </li>
    ))}
  </ul>
);

export default MovieList;
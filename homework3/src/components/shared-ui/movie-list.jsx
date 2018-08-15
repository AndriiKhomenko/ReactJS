import React from 'react';

const MovieList = ({ movies }) => (
  <ul>
    {movies.map(movie => (
      <li key={movie.id}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt="kartinka"
          />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      </li>
    ))}
  </ul>
);

export default MovieList;

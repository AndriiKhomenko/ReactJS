import React from 'react';

const MovieCard = ({poster_path, title, overview}) => (
  <div>
    <img src={"https://image.tmdb.org/t/p/w300" + poster_path} alt="kartinka"/>
    <h1>{title}</h1>
    <p>{overview}</p>
  </div>

);

export default MovieCard;
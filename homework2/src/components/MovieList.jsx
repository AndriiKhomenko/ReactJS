import React from 'react';
import MovieCard from './MovieCard';
import styles from './MovieList.css'

const MovieList = ({films, onClick}) => (
  <ul className={styles.container}>
    {films.map(film => (
      <li key={film.id} className={styles.card}>
        <MovieCard
          title={film.title}
          poster_path={film.poster_path}
          overview={film.overview}
        />
        <button onClick={() => onClick(film.id)} className={styles.btn}>Add to favourites</button>
        {/* <Button text="Add to Favourite" onClick={() => onClick(film.id)} /> */}
      </li>
    ))}
  </ul>
);

export default MovieList;
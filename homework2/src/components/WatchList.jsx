import React from 'react';
import styles from './WatchList.css'

const WatchList = ({favorites, onClick, poster_path}) => (
  <ul className={styles.container}>
    <h1 className={styles.text_1}>Watchlist</h1>
    {favorites.map(film => (
      <li key={film.id} className={styles.card}>
        <img src={"https://image.tmdb.org/t/p/w200" + film.poster_path} alt="kartinka" className={styles.image}/>
          <div className={styles.data}>
            <h3 className={styles.text}>{film.title}</h3>
            <p className={styles.text}>Released: {film.release_date}</p>
            <p className={styles.text}>Rating: {film.vote_average}</p>            
            <button className={styles.btn} onClick={() => onClick(film.id)}>Delete</button>
          </div>
      </li>
    ))}
  </ul>
);

export default WatchList;
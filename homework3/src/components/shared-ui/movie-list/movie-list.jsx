import React from "react";
import {connect} from 'react-redux';
import {handleClick} from '../../../redux/watch-list/actions';
import styles from './style.css';
import MovieCard from '../movie-card/movie-card';

const MovieList = ({ movies, handleClick }) => (
  <ul className={styles.container}>
    {movies.map(movie => (
      <li key={movie.id} className={styles.card}>
        <MovieCard 
          poster_path={movie.poster_path} 
          title={movie.title}
          overview={movie.overview}
        />
        <button onClick={() => handleClick(movie)} className={styles.btn}>Add to favourites</button>
      </li>
    ))}
  </ul>
);


const mapDispatchToProps = { handleClick };

export default connect(null, mapDispatchToProps)(MovieList);

// export default MovieList;

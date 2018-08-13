import React from 'react';
import styles from './MovieCard.css';
import LinesEllipsis from 'react-lines-ellipsis';

const MovieCard = ({poster_path, title, overview}) => (
  <div className={styles.container}>
    <img src={"https://image.tmdb.org/t/p/w200" + poster_path} alt="kartinka"/>
    <h2 className={styles.text}>{title}</h2>
    <LinesEllipsis
      className={styles.text1}
      text={overview}
      maxLine='3'
      ellipsis='...'
      trimRight
      basedOn='words'
    />
  </div>
);

export default MovieCard;
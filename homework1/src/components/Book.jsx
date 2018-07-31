import React from 'react';
import styles from './styles/bookStyle.css';
import imageDel from '../images/delete.png';

const Book = ({title, imageLink, author, descr, onDelete}) => (
  <div className={styles.book_card}>
    <img src={imageLink} alt="this is a book"></img>
    <div className={styles.book_text}>
      <h1>{title}</h1>
      <p className={styles.authorBook}>{author}</p>
      <p className={styles.description}>{descr}</p>
      <img src={imageDel} alt="Delete" className={styles.button} onClick={onDelete}/>
    </div>
  </div>
);

export default Book;
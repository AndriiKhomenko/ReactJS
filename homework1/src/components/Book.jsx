import React from 'react';
import PropTypes from 'prop-types';
import styles from './Book.css';
import imageDel from '../images/delete.png';

const Book = ({title, imageLink, author, descr, onDelete}) => (
    <div className={styles.book_card}>
        <img src={imageLink} alt="this is a book"></img>
            <div className={styles.book_text}>
                <h1>{title}</h1>
                <p className={styles.authorBook}>{author}</p>
                <p className={styles.description}>{descr}</p>
                <img src={imageDel} className={styles.button} onClick={onDelete}/>
                {/*<button className={styles.button} onClick={onDelete}>D</button>*/}
            </div>
    </div>
);

export default Book;
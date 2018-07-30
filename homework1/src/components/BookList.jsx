import React from 'react';
import Book from './Book';
import styles from './BookList.css';

const BookList = ({books, onDelete}) => (
  <ul>
      {books.map(book => (
        <li key={book.id}>
          <Book
              title={book.title}
              imageLink={book.imageLink}
              author={book.author}
              descr={book.descr}
              onDelete={() => onDelete(book.id)}
          />
        </li>
      ))}
  </ul>
);

export default BookList;
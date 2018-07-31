import React, {Component} from 'react';
import v4 from 'uuid/v4';
import CreateBook from './CreateBook';
import BookList from './BookList';
import books from '../books.json';
import SearchBar from './SearchBar';
import {getVisibleBooks} from '../services/selectors';
import styles from './styles/appStyle.css';

export default class App extends Component {

  state = {
    books: books,
    filter: '',
  };

  addBook = (title, imageLink, author, descr) =>{
    const book = {
      id: v4(),
      title,
      imageLink,
      author,
      descr,

    };

  this.setState(prevState => ({
    books: [book, ...prevState.books],
  }));
  };

  deleteBook = id => {
    this.setState(prevState => ({
      books: prevState.books.filter(book => book.id !== id),
    }))
  };

  changeFilter = e => {
    this.setState({filter: e.target.value})
  };

  render() {

    const {books, filter} = this.state;

    const visibleBooks = getVisibleBooks(books, filter);

    return (
      <div className={styles.container}>
        <CreateBook onSubmit={this.addBook} />
        <div className={styles.container_1}>
          <SearchBar value={filter} onChange={this.changeFilter} />
          <BookList books={visibleBooks} onDelete={this.deleteBook} />
        </div>
      </div>
    );
  }
}
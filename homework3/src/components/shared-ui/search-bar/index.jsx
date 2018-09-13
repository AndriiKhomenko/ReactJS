import React, {Component} from 'react';
import {connect} from 'react-redux';
import {changeQuery} from '../../../redux/search-bar/actions';
import { fetchMoviesQuery } from "../../../redux/movie-list/actions";
import styles from './style.css';

class SearchBar extends Component  {
  handleSubmit = e => {
    const { fetchMoviesQuery, search } = this.props;
    fetchMoviesQuery(search);
    e.preventDefault();
  }

  render() {
    const {search, changeQuery } = this.props;
    return (
      <form className={styles.search} onSubmit={this.handleSubmit}>
        <div className={styles.container}>
          <h3 className={styles.title}>Search by title</h3>
          <input 
            className={styles.inp}
            type="text" value={search} 
            onChange={e => changeQuery(e.target.value)}
          />
        </div>
        <button type="submit" className={styles.btnn}>search</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
    search: state.search,
  });

const mapDispatchToProps = { changeQuery, fetchMoviesQuery };

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
import React from 'react';
import {connect} from 'react-redux';
import {changeQuery} from '../../../redux/search-bar/actions';
import { fetchMoviesQuery } from "../../../redux/movie-list/actions";
import styles from './style.css';

const SearchBar = ({search, changeQuery, fetchMoviesQuery}) => (
  <div className={styles.search}>
    <div className={styles.container}>
      <h3 className={styles.title}>Search by title</h3>
      <input 
        className={styles.inp}
        type="text" value={search} 
        onChange={e => changeQuery(e.target.value)}
      />
    </div>
    <button onClick={() => fetchMoviesQuery(search)} className={styles.btnn}>search</button>
  </div>
);

const mapStateToProps = state => ({
    search: state.search,
  });

const mapDispatchToProps = { changeQuery, fetchMoviesQuery };

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
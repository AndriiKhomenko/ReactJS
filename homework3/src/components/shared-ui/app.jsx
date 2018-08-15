import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../../redux/movie-list/actions';
import MovieList from './movie-list';

const App = ({ movies, isLoading, error, fetchMovies }) => (
  <div>
    <button onClick={() => fetchMovies('popular')}>Fetch Movies</button>
    {error && <h1>error</h1>}
    {isLoading && <h2>spinner</h2>}
    {!error && !isLoading && <MovieList movies={movies} />}
  </div>
);

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoading: state.movies.isLoading,
  error: state.movies.error,
});

const mapDispatchToProps = { fetchMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

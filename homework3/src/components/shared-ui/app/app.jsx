import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../../../redux/movie-list/actions";
import MovieList from "../movie-list/movie-list";
import Spinner from "../spinner/index";

const App = ({ movies, isLoading, error, fetchMovies }) => (
  <div>
    <button type="button" onClick={() => fetchMovies("popular")}>
      Fetch Movies
    </button>
    <Spinner />
    {error && <h1>error</h1>}
    {isLoading && <Spinner />}
    {!error && !isLoading && <MovieList movies={movies} />}
  </div>
);

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoading: state.movies.isLoading,
  error: state.movies.error
});

const mapDispatchToProps = { fetchMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

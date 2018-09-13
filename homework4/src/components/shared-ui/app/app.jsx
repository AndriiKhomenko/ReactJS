import React, {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchMovies } from "../../../redux/movie-list/actions";
import MovieList from "../movie-list/movie-list";
import Spinner from "../spinner/index";
import CategorySelector from '../category-selector/category-selector';
import SearchBar from '../search-bar/index';
import WatchList from "../watch-list/watch-list";
import styles from './style.css';

class App extends Component {

  render(){
    const {movies, isLoading, error, fetchMovies} = this.props;
    return (
        <div className={styles.main}>
          
            {/* <WatchList /> */}
            <Switch>
              <Route exact path="/watchlist" component={WatchList} />
              <Route exact path="/search" component={SearchBar} />
              <Redirect to="search"/>
            </Switch>
            <div className={styles.container_1}>
              <div className={styles.container_2}>
                <CategorySelector fetchFilms={fetchMovies} />
                {/* <SearchBar /> */}
              </div>
              {error && <h1>error</h1>}
              {isLoading && <Spinner />}
              {!error && !isLoading && <MovieList movies={movies} />}
            </div> 
        </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoading: state.movies.isLoading,
  error: state.movies.error,
});

const mapDispatchToProps = { fetchMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

import React, { Component } from 'react';
import MovieList from './MovieList';
import CategorySelector from './CategorySelector';
import selectorOptions from './selector-options';
import {fetchMovies} from '../services/api';
import {fetchMoviesByTitle} from '../services/api';
import Spinner from './Spinner';
import SearchBar from './SearchBar';
import WatchList from './WatchList';
import styles from './App.css';

export default class App extends Component {

  initState = [];

  state = {
    films: [],
    favorites: [],
    category: 'popular',
    filter: '',
    isLoading: null,
  };

  componentDidMount(){

    this.getDataFromStorage();
    
    fetchMovies({
      category: this.state.category,
      onSuccess: this.handleFetchSuccess,
      onError: this.handleFetchFailure,
    });

  };

  componentDidUpdate(prevProps, prevState){

      this.setStorageData();

    if(prevState.category.value !== this.state.category.value){

      this.setState({isLoading: true});

      fetchMovies({
        category: this.state.category.value,
        isLoading: this.setState({isLoading: false}),
        onSuccess: this.handleFetchSuccess,
        onError: this.handleFetchFailure,
      });
    }
  }
  

  handleFetchSuccess = (films) => {
    this.setState({films});
    console.log(films);
  };

  handleFetchFailure = () => {
    console.log('Error')
  };

  changeCategory = category => {
    this.setState({category})
  };

  changeFilter = e => {
    const {value} = e.target;
    this.setState({filter: value})
  };

  searchFilm = () => {
    if(this.state.filter) {
      fetchMoviesByTitle({
        filter: this.state.filter,
        onSuccess: this.handleFetchSuccess,
        onError: this.handleFetchFailure,
      });
    }
  };

  addToFavorites = id => {
    const film = this.state.films.filter(film => film.id === id);
    if(!this.state.favorites.includes(film[0])){
      this.setState(prevState => ({
        favorites: [film[0], ...prevState.favorites],
    }))
    } else {
        alert("Вы уже добавили этот фильм в избранное");
        return;
      }
  };

  deleteFromFavorites = id => {
    this.setState(prevState => ({
      favorites: prevState.favorites.filter(film => film.id !== id),
    }))
    this.setStorageData();
  };

  getDataFromStorage = () => {
    const dataFromStorage = JSON.parse(localStorage.getItem('favFilms'));
    if(dataFromStorage){
      this.setState({favorites: dataFromStorage});
    }  
  };

  setStorageData = () => {
    localStorage.setItem('favFilms', JSON.stringify(this.state.favorites));
  };

  render() {

    const {films, filter, category, isLoading, favorites} = this.state;

    return (
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
        <div className={styles.main}>
          <div>
            <WatchList favorites={favorites} onClick={this.deleteFromFavorites}/>
          </div>
          <div className={styles.container_1}>
            <div className={styles.container_2}>
              <CategorySelector
                options={selectorOptions}
                value={category}
                onChange={this.changeCategory}
              />
              <SearchBar value={filter} onChange={this.changeFilter} onClick={this.searchFilm}/>
            </div>
            <MovieList films={films} onClick={this.addToFavorites} />
          </div>
        </div>
          )}
      </div>
    );
  }
}

import React, { Component } from 'react';
import MovieList from './MovieList';
import CategorySelector from './CategorySelector';
import selectorOptions from './selector-options';
import {fetchMovies} from '../services/api';
import {fetchMoviesByTitle} from '../services/api';
import Spinner from './Spinner';
import SearchBar from './SearchBar';

export default class App extends Component {

  state = {
    films: [],
    category: 'popular',
    filter: '',
    isLoading: null,
  };

  componentDidMount(){
    fetchMovies({
      category: this.state.category,
      onSuccess: this.handleFetchSuccess,
      onError: this.handleFetchFailure,
    });
  };

  componentDidUpdate(prevProps, prevState){
    
    if(this.state.filter) {
      fetchMoviesByTitle({
        filter: this.state.filter,
        onSuccess: this.handleFetchSuccess,
        onError: this.handleFetchFailure,
      });
    }

    // if(!prevState.category) {
    //   fetchMovies({
    //     category: this.state.category.value,
    //     onSuccess: this.handleFetchSuccess,
    //     onError: this.handleFetchFailure,
    //   });

    //   return;
    // };

    if(prevState.category.value !== this.state.category.value){
      fetchMovies({
        category: this.state.category.value,
        onSuccess: this.handleFetchSuccess,
        onError: this.handleFetchFailure,
      });
    }
  }

  handleFetchSuccess = (films) => {
    this.setState({films});
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

  render() {

    const {films, filter, category, isLoading} = this.state;

    return (
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
        <div>
          <CategorySelector
            options={selectorOptions}
            value={category}
            onChange={this.changeCategory}
          />
          <SearchBar value={filter} onChange={this.changeFilter}/>
          <MovieList films={films} />
        </div>
          )}
      </div>
    );
  }
}

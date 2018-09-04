import {FAVOURITES, DELETEFAV} from './types';

const addFilm = (state = initialState, payload) => {
  if(state.movies.includes(payload)) {
    alert("Вы уже добавили этот фильм в избранное");
  }
  return console.log('da');
};

const dataFromStorage = localStorage.getItem('favFilms');

const initialState = {
  movies: dataFromStorage ? JSON.parse(dataFromStorage) : [],
};

export default function favouritesReducer(state = initialState, {type, payload}){
    switch(type){
      case FAVOURITES:
      // if(state.movies.includes(payload)) {
      //   alert("Вы уже добавили этот фильм в избранное");
        return addFilm(payload);
      // } else {
      //       return{
      //         movies: [...state.movies, payload]
      //       }
      // }

      case DELETEFAV:
        return {
          movies: [...state.movies.filter(film => film !== payload)]
        };
  
      default:
        return state;
    }
  }
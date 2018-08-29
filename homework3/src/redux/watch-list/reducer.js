import {FAVOURITES, DELETEFAV} from './types';

 function getDataFromStorage() {
  const dataFromStorage = localStorage.getItem('favFilms');
  if(dataFromStorage){
    return JSON.parse(dataFromStorage);
  } else {
    return [];
  }
};

const initialState = {
    favourites: getDataFromStorage(),
  };

export default function favouritesReducer(state = initialState, {type, payload}){
    switch(type){
      case FAVOURITES:
      if(state.favourites.includes(payload)) {
        alert("Вы уже добавили этот фильм в избранное");
        return {
          favourites: [...state.favourites],
        }
      } else {
            return{
              favourites: [...state.favourites, payload]
            }
      }

      case DELETEFAV:
        return {
          favourites: [...state.favourites.filter(film => film !== payload)]
        };
  
      default:
        return state;
    }
  }
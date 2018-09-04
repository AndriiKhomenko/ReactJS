import {FAVOURITES, DELETEFAV} from './types';

export const handleClick = film => ({
  type: FAVOURITES,
  payload: film
});

export const deleteFromFavourites = film => ({
  type: DELETEFAV,
  payload: film
});
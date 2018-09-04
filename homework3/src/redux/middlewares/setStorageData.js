const setStorageData = store => next => action => {
  next(action);
  const fav = store.getState().favourites.movies;
  localStorage.setItem('favFilms', JSON.stringify(fav));
};
export default setStorageData;
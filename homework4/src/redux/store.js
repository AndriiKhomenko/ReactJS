import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import moviesReducer from './movie-list/reducer';
import searchReducer from './search-bar/reducer';
import favouritesReducer from './watch-list/reducer';
import thunk from './middlewares/thunk';
import setStorageData from './middlewares/setStorageData';

const rootReducer = combineReducers({
  movies: moviesReducer,
  search: searchReducer,
  favourites: favouritesReducer
});

const enhancer = composeWithDevTools(applyMiddleware(thunk, setStorageData));

const store = createStore(rootReducer, enhancer);

export default store;

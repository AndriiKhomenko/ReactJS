import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import moviesReducer from './movie-list/reducer';
import thunk from './middlewares/thunk';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancer);

export default store;

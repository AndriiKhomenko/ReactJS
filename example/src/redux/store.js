import {createStore} from 'redux';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const enhancer = composeWithDevTools();

const store = createStore(rootReducer, enhancer);

export default store;
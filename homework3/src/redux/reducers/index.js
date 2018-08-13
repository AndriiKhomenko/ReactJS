import { combineReducers } from "redux";
import counterReducer from './counter';

const rootReducer = combineReducers({
  counterValue: counterReducer
});

export default rootReducer;
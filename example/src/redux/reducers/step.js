import {CHANGE_STEP} from '../actions/types';

export default function stepReducer(state = 10, {type, payload}){
  switch(type){
    case CHANGE_STEP:
      return payload;

    default:
      return state;
  }
}


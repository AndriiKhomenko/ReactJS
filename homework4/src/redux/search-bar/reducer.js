import {QUERY} from './types';

export default function searchReducer(state = '', {type, payload}){
    switch(type){
      case QUERY:
        return payload;
  
      default:
        return state;
    }
  }
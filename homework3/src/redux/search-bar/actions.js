import {QUERY} from './types';

export const changeQuery = query => ({
  type: QUERY,
  payload: query
});
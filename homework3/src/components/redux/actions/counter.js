import {INCREMENT, DECREMENT} from './types';
export const increment = val => ({
    type: actionTypes.INCREMENT,
    payload: val
});
export const decrement = val => ({
    type: actionTypes.DECREMENT,
    payload: val
});
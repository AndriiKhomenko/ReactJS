import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
} from "./types";

const initialState = {
  movies: [],
  isLoading: false,
  error: null
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        movies: payload,
      };

    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false
      };

    default:
      return state;
  }
};

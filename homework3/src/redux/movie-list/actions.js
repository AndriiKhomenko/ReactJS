import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE
} from "./types";
import { fetchMoviesByCategory } from "../../services/api";

const fetchMoviesRequest = () => ({
  type: FETCH_MOVIES_REQUEST
});

const fetchMoviesSuccess = movies => ({
  type: FETCH_MOVIES_SUCCESS,
  payload: movies
});

const fetchMoviesFailure = error => ({
  type: FETCH_MOVIES_FAILURE,
  payload: error
});

export const fetchMovies = category => dispatch => {
  dispatch(fetchMoviesRequest());

  fetchMoviesByCategory(category)
    .then(movies => dispatch(fetchMoviesSuccess(movies)))
    .catch(err => dispatch(fetchMoviesFailure(err)));
};

import axios from 'axios';

const API_KEY = '0d49d6df643d7b291804012bcdeaf040';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = ({category, onSuccess, onError}) => {

  const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`;

    return axios
      .get(url)
      .then(response => response.data.results)
      .then(onSuccess)
      .catch(onError);
};

export const fetchMoviesByTitle = ({filter, onSuccess, onError}) => {

  const url = `https://api.themoviedb.org/3/search/movie?query=${filter}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
 
    return axios
      .get(url)
      .then(response => response.data.results)
      .then(onSuccess)
      .catch(onError);
};
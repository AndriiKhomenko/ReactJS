import axios from 'axios';

const API_KEY = '0d49d6df643d7b291804012bcdeaf040';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMoviesByCategory = category => {
  const url = `${BASE_URL}/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`;
  return axios.get(url).then(response => response.data.results);
};

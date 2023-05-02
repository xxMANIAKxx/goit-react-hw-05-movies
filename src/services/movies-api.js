import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const KEY = '57e0b96b05e3b80d867b27d0f314d0f1';
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export const searchMovies = async stringToSearch => {
  const queryString = `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${stringToSearch}`;
  const { data: movies } = await axios.get(queryString);
  return movies;
};

export const getMovieDetails = async movieId => {
  const queryString = `movie/${movieId}$?api_key=${KEY}&language=en-US`;
  const { data: movie } = await axios.get(queryString);
  return movie;
};

export const fetchTrendingMovies = async () => {
  const queryString = `trending/movie/day?api_key=${KEY}`;
  const { data: movies } = await axios.get(queryString);
  return movies;
};

export const getMovieCast = async movieId => {
  const queryString = `movie/${movieId}/credits$?api_key={apiKey}&language=en-US`;
  const { data } = await axios.get(queryString);
  return data;
};

export const getReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${KEY}`);
  const { results } = response.data;
  return results;
};

// export const getReviews = async movieId => {
//   const queryString = `movie/${movieId}/reviews$?api_key={apiKey}&language=en-US`;
//   const { data } = await axios.get(queryString);
//   return data;
// };
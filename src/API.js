import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = 'aa97bd548ce602c0ddc0d918fd61fca9';

export const getTrendingMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}3/trending/movie/day`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMovieDetails = async movieId => {
  try {
    const response = await axios.get(`${BASE_URL}3/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });

    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

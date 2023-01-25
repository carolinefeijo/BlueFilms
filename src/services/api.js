import axios from 'axios';

const API_KEY = '9f332e03eae8812807cfe435a5eed196';
const LANGUAGE = 'pt-BR';
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: API_KEY, language: LANGUAGE },
});

export const GetTrendingMovies = () => {
  const data = api
    .get('trending/movie/week')
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    });

  return data;
};

export const GetPopularMovies = () => {
  const data = api
    .get('movie/popular')
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    });

  return data;
};

export const GetNextMovies = () => {
  const data = api
    .get('movie/upcoming')
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    });

  return data;
};

export const GetPopularActors = () => {
  const data = api
    .get('person/popular')
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    });

  return data;
};

export const GetMovieDetails = (id) => {
  const data = api
    .get(`movie/${id}`)
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    });

  return data;
};

export const GetImage = (uri, size) => {
  const data = axios
    .create({
      baseURL: `https://image.tmdb.org/t/p/`,
    })
    .get(`${size}${uri}`)
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    });

  return data;
};
export default api;

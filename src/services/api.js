import axios from 'axios';

const API_KEY = '9f332e03eae8812807cfe435a5eed196';
const LANGUAGE = 'pt-BR';
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { api_key: API_KEY, language: LANGUAGE },
});

export const GetTrendingMovies = () => {
  // filmes em destaque
  const data = api
    .get('trending/movie/week')
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    });

  return data;
};

export const GetPopularMovies = () => {
  // filmes populares
  const data = api
    .get('movie/popular')
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    });

  return data;
};

export const GetNextMovies = () => {
  // filmes lançamentos
  const data = api
    .get('movie/upcoming')
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    });

  return data;
};

export const GetPopularActors = () => {
  // atores populares
  const data = api
    .get('person/popular')
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    });

  return data;
};

export const SearchMovie = (movieSearch) => {
  // atores populares
  const data = axios
    .create({
      baseURL: 'https://api.themoviedb.org/3/',
      params: { api_key: API_KEY, language: LANGUAGE, query: movieSearch },
    })
    .get('search/movie')
    .then((response) => response.data.results)
    .catch((err) => {
      console.error(err);
    });

  return data;
};

export const GetMovieDetails = (id) => {
  // detalhes do filme
  const data = api
    .get(`movie/${id}`)
    .then((response) => response.data)
    .catch((err) => {
      console.error(err);
    });

  return data;
};

export default api;

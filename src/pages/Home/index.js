import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import * as S from './styles';

import {
  GetNextMovies,
  GetPopularMovies,
  GetTrendingMovies,
  // GetPopularMovies,
  // GetNextMovies,
  // GetPopularActors,
  // GetImage,
} from '../../services/api';
import ListFilms from '../../components/ListFilms';

export default function Home() {
  const [trending, setTrending] = useState(null);
  const [popular, setPopular] = useState('');
  const [nextMovie, setNextMovie] = useState(null);
  // const [actors, setActors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const trendingResponse = await GetTrendingMovies();
      setTrending(trendingResponse);

      const popularResponse = await GetPopularMovies();
      setPopular(popularResponse.results);

      const nextMovieResponse = await GetNextMovies();
      setNextMovie(nextMovieResponse.results);

      // const actorsResponse = await GetPopularActors();
      // setActors(actorsResponse);

      // GetImage('/z7noaCJ4KtmhwHw7QcNtnMMo4Qy.jpg', 'original');
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      <Banner />
      <ListFilms movieList={popular} title={'Filmes Populares'} />
      <ListFilms movieList={nextMovie} title={'Próximos lançamentos'} />
    </S.Container>
  );
}

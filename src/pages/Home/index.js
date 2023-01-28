import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import * as S from './styles';

import {
  GetNextMovies,
  GetPopularActors,
  GetPopularMovies,
  GetTrendingMovies,
  // GetPopularMovies,
  // GetNextMovies,
  // GetPopularActors,
  // GetImage,
} from '../../services/api';
import ListFilms from '../../components/ListFilms';
import ListActors from '../../components/ListActors';

export default function Home() {
  const [trending, setTrending] = useState(null);
  const [popular, setPopular] = useState('');
  const [nextMovie, setNextMovie] = useState(null);
  const [actors, setActors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const trendingResponse = await GetTrendingMovies();
      setTrending(trendingResponse.results);

      const popularResponse = await GetPopularMovies();
      setPopular(popularResponse.results);

      const nextMovieResponse = await GetNextMovies();
      setNextMovie(nextMovieResponse.results);

      const actorsResponse = await GetPopularActors();
      setActors(actorsResponse.results);
    };

    fetchData();
  }, []);

  return (
    <S.Container>
      <Banner list={trending} />
      <ListFilms movieList={popular} title={'Filmes Populares'} />
      <ListFilms movieList={nextMovie} title={'Próximos lançamentos'} />
      <ListActors actorsList={actors} title={'Atores populares'} />
    </S.Container>
  );
}

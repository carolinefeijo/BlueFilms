import React, { useEffect, useState } from 'react';
import * as S from './styles';

import { useLocation } from 'react-router-dom';

import { GetMovieDetails } from '../../services/api';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

export default function MovieDetail() {
  const { state } = useLocation();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const movieResponse = await GetMovieDetails(state.id);
      setMovie(movieResponse);
    };
    fetchData();
  }, [state]);

  return (
    <>
      {movie && (
        <S.Container>
          <S.ImageBackground src={`${baseUrl}${movie.backdrop_path}`} />
          <S.ImagePoster src={`${baseUrl}${movie.poster_path}`} />
          <S.Title>{movie.title}</S.Title>

          <S.IMDBContainer>
            <S.StarIcon color="#FFB800" size={30} />
            <S.AverageText>{movie.vote_average.toFixed(1)}/10</S.AverageText>
            <S.Slogan>
              <S.SloganText>IMDb</S.SloganText>
            </S.Slogan>
          </S.IMDBContainer>

          <S.DescriptionFilm>
            <S.TitleDescription>Visão Geral</S.TitleDescription>
            <S.SubTitle>{movie.overview}</S.SubTitle>
          </S.DescriptionFilm>
        </S.Container>
      )}
    </>
  );
}

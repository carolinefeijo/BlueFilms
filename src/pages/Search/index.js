import React from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

import MovieCard from '../../components/MovieCard';

export default function Search({ movieList }) {
  const navigate = useNavigate();

  const handleMovieDetail = (movieId) => {
    navigate('/moviedetail', { state: { id: movieId } });
  };
  return (
    <S.Container>
      {movieList && (
        <>
          <S.SearchTitle>Resultados</S.SearchTitle>
          {movieList.length > 0 ? (
            <S.ListContainer>
              {movieList.map((item, key) => (
                <MovieCard
                  item={item}
                  key={key}
                  handleMovie={handleMovieDetail}
                />
              ))}
            </S.ListContainer>
          ) : (
            <h1>Nao encontramos filmes</h1>
          )}
        </>
      )}
    </S.Container>
  );
}

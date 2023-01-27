import React, { useState } from 'react';
import * as S from './styles';

import { useNavigate } from 'react-router-dom';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import MovieCard from '../MovieCard';

export default function ListFilms({ movieList, title }) {
  const navigate = useNavigate();

  const handleMovieDetail = (movieId) => {
    navigate('/moviedetail', { state: { id: movieId } });
  };

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let value = scrollX + Math.round(window.innerWidth / 2);
    if (value > 0) {
      value = 0;
    }
    setScrollX(value);
  };
  const handleRigthArrow = () => {
    // faz o calculo de quantos card da e joga pra direita e divide o tamanho por porporção de tela
    let value = scrollX - Math.round(window.innerWidth / 2);
    const listWidth = movieList.length * (window.innerWidth >= 768 ? 225 : 144);
    if (window.innerWidth - listWidth > value) {
      value = window.innerWidth - listWidth - 0;
    }
    setScrollX(value);
  };

  return (
    <>
      {movieList && (
        <S.Container>
          <S.CategoryTitle>{title}</S.CategoryTitle>

          <S.MovieRowLeft onClick={handleLeftArrow}>
            <MdNavigateBefore size={50} color={'white'} />
          </S.MovieRowLeft>

          <S.MovieRowRigth onClick={handleRigthArrow}>
            <MdNavigateNext size={50} color={'white'} />
          </S.MovieRowRigth>

          <S.ListContainer mg={scrollX} width={movieList.length * 212}>
            {movieList?.map((item, key) => (
              <MovieCard
                key={key}
                item={item}
                handleMovie={handleMovieDetail}
              />
            ))}
          </S.ListContainer>
        </S.Container>
      )}
    </>
  );
}

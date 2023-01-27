import React from 'react';
import * as S from './styles';

export default function MovieCard({ item, handleMovie }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  return (
    <S.Button onClick={() => handleMovie(item.id)}>
      <S.Container>
        <S.ImagePoster src={`${baseUrl}${item.poster_path}`} alt={item.title} />
        <S.DescriptionContainer>
          <S.Title>{item.title}</S.Title>
          <S.Description>{item.release_date.slice(0, 4)}</S.Description>
        </S.DescriptionContainer>
      </S.Container>
    </S.Button>
  );
}

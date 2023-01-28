import React from 'react';
import * as S from './styles';

export default function ActorCard({ item, handleActor }) {
  const baseUrl = 'https://image.tmdb.org/t/p/w200/';

  return (
    <S.Container onClick={() => handleActor(item.id)}>
      <S.ImagePoster src={`${baseUrl}${item.profile_path}`} alt={item.title} />
      <S.DescriptionContainer>
        <S.Title>{item.name}</S.Title>
      </S.DescriptionContainer>
    </S.Container>
  );
}

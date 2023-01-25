import React from 'react';
import * as S from './styles';

import SearchComponent from '../SearchComponent';

export default function Header() {
  return (
    <S.Container>
      <S.Title>BlueFilms</S.Title>
      <SearchComponent />
    </S.Container>
  );
}

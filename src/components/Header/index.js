import React from 'react';
import * as S from './styles';

import SearchComponent from '../SearchComponent';

export default function Header({ handleSearch }) {
  return (
    <S.Container>
      <S.Navigate href="./">
        <S.Title>BlueFilms</S.Title>
      </S.Navigate>
      <SearchComponent handleSearch={handleSearch} />
    </S.Container>
  );
}

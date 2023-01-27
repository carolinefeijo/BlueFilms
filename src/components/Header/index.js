import React from 'react';
import * as S from './styles';

import Search from '../Search';

export default function Header({ handleSearch }) {
  return (
    <S.Container>
      <S.Navigate href="./home">
        <S.Title>BlueFilms</S.Title>
      </S.Navigate>
      <Search handleSearch={handleSearch} />
    </S.Container>
  );
}

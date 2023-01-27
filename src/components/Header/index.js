import React from 'react';
import * as S from './styles';

import Search from '../Search';

export default function Header({ handleSearch }) {
  return (
    <S.Container>
      <S.Title>BlueFilms</S.Title>
      <Search handleSearch={handleSearch} />
    </S.Container>
  );
}

import React, { useState } from 'react';
import * as S from './styles';

export default function SearchComponent() {
  const [text, setText] = useState('');

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <S.SearchButton type="submit">
        <S.SearchIcon color="#FFFFFF" size={29} />
      </S.SearchButton>
    </S.SearchContainer>
  );
}

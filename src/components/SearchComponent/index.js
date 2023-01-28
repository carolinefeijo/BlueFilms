import React, { useState } from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';

export default function SearchComponent({ handleSearch }) {
  const navigate = useNavigate();

  const [text, setText] = useState('');

  const handleSubmitButton = () => {
    handleSearch(text);
    navigate('/search');
  };

  return (
    <S.SearchContainer>
      <S.SearchInput
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <S.SearchButton onClick={text !== '' ? handleSubmitButton : undefined}>
        <S.SearchIcon color="#FFFFFF" size={29} />
      </S.SearchButton>
    </S.SearchContainer>
  );
}

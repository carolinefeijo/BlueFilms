/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a3abbd4d;
  width: 380px;
  height: 45px;
  outline: none;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  margin: 12px 0 12px 0;
`;

export const SearchInput = styled.input`
  width: 290px;
  height: 48px;
  background: transparent;
  font-size: 16px;
  border: none;
  outline: none;
  color: #ffffff;
  display: flex;
`;
export const SearchIcon = styled(GoSearch)``;

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: 6px;
  display: flex;
`;

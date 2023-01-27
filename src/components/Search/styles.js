/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { GoSearch } from 'react-icons/go';

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #a3abbd4d;
  width: 450px;
  outline: none;
  border: none;
  border-radius: 8px;
  margin: 12px 0 12px 0;
  height: 50px;
  margin-right: 30px;
  @media (max-width: 768px) {
    height: 30px;
    width: 300px;
    margin-left: 20px;
    border-radius: 3px;
  }
`;

export const SearchInput = styled.input`
  display: flex;
  width: 100%;
  height: 100%;
  margin-left: 8px;
  background: transparent;
  font-size: 16px;
  border: none;
  outline: none;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SearchButton = styled.button`
  margin-right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
`;

export const SearchIcon = styled(GoSearch)`
  @media (max-width: 768px) {
    width: 17px;
    height: 17px;
  }
`;

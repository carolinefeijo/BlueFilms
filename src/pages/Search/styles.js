/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #191b1f;
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export const ListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const SearchTitle = styled.h2`
  font-size: 24px;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

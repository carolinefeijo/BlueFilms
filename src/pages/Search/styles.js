/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #191b1f;
  padding: 30px;
  display: flex;
  flex-direction: column;
  min-height: auto !important;
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
  font-size: 29px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const ContainerError = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  @media (max-width: 768px) {
  }
`;

export const TitleError = styled.h1`
  margin-top: 200px;
  font-family: 'Inter', sans-serif;
  font-size: 25px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

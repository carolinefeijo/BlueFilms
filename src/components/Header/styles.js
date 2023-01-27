/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #182e4a;
`;

export const Title = styled.h1`
  font-family: Inter, sans-serif;
  color: #ffffff;
  font-size: 40px;
  margin-left: 30px;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`;
export const Navigate = styled.a`
  text-decoration: none;
  @media (max-width: 768px) {
    text-decoration: none;
  }
`;

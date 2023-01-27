/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ContainerFooter = styled.div`
  display: flex;
  background: #182e4a;
  align-items: center;
  height: 150px;
  @media (max-width: 768px) {
    justify-content: center;
    height: 80px;
  }
`;
export const ContainerTitles = styled.div`
  display: flex;
  margin-left: 60px;
  flex-direction: column;

  @media (max-width: 768px) {
    /* display: flex; */
    align-items: flex-start;
    justify-content: center;
    margin-left: 0;
  }
`;

export const TitleFooter = styled.h1`
  font-family: 'Inter', sans-serif;
  color: #e2e2e2;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;
export const SubTitleFooter = styled.p`
  margin-top: 20px;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  color: #e2e2e2;
  @media (max-width: 768px) {
    font-size: 13px;
    margin-top: 8px;
  }
`;

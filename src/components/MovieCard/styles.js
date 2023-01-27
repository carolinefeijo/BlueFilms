import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const Container = styled.div`
  border-radius: 4px;
  background-color: #3f4756;
  width: 200px;
  height: 350px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 120px;
    height: 180px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  @media (max-width: 768px) {
    margin: 2px;
  }
`;

export const ImagePoster = styled.img`
  width: 100%;
  height: 80%;
  @media (max-width: 768px) {
    height: 80%;
  }
`;

export const Title = styled.h2`
  font-size: 16px;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 95%;
  padding: 2px;
  text-align: start;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Description = styled.p`
  text-align: center;
  font-size: 14px;
  color: white;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 95%;
  padding: 2px;
  text-align: start;
  @media (max-width: 768px) {
    font-size: 7px;
  }
`;

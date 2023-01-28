import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  transform: scale(0.9);
  &:hover {
    cursor: pointer;
    transform: scale(1);
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImagePoster = styled.img`
  border-radius: 100%;
  width: 200px;
  height: 200px;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
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
  text-align: center;
  margin-top: 8px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

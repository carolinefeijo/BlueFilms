// eslint-disable import/prefer-default-export
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #191b1f;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  opacity: 0.6;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

export const ImagePoster = styled.img`
  position: absolute;
  width: 205px;
  height: 308px;
  left: 70px;
  top: 520px;
  object-fit: cover;
  @media (max-width: 768px) {
    width: 100px;
    height: 150px;
    left: 30px;
    top: 280px;
  }
`;

export const Title = styled.h3`
  font-family: Inter, sans-serif;
  font-weight: 600;
  font-size: 24px;
  margin-left: 310px;
  font-weight: 500;
  color: white;
  margin-top: 30px;
  @media (max-width: 768px) {
    font-size: 15px;
    margin-left: 30px;
    margin-top: 90px;
  }
`;

export const IMDBContainer = styled.div`
  display: flex;
  margin-left: 310px;
  margin-top: 14px;
  @media (max-width: 768px) {
    margin-left: 30px;
    margin-top: 8px;
  }
`;
export const StarIcon = styled(AiFillStar)`
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
export const Slogan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #ffb800;
  font-family: 'Roboto' sans-serif;
  margin-left: 8px;
  padding: 4px 12px 4px 12px;
  @media (max-width: 768px) {
    padding: 2px 8px 2px 8px;
  }
`;
export const SloganText = styled.p`
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const DescriptionFilm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 90px 70px 50px 70px;
  width: 700px;

  @media (max-width: 768px) {
    margin-top: 22px;
    margin: 30px;
    width: auto;
  }
`;
export const TitleDescription = styled.h2`
  font-family: Roboto, sans-serif;
  color: white;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SubTitle = styled.h4`
  margin-top: 12px;
  color: white;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const AverageText = styled.p`
  color: white;
  margin-left: 8px;
  font-size: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

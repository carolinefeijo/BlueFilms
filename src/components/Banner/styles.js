/* eslint-disable import/prefer-default-export */
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';

export const CardContainer = styled.div``;

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: -30px -30px 0px -30px;
  .control-next {
    background-color: red;
  }
  .carousel.carousel-slider .control-arrow {
    top: 30%;
    margin: 25px;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.6);
    font-size: 26px;
    bottom: 0;
    margin-top: 50px;
    width: 84px;
    height: 84px;
    padding: 10px;
    border-radius: 50px;
  }
  @media (max-width: 768px) {
    .carousel.carousel-slider .control-arrow {
      display: none;
    }
  }
`;

export const BannerCard = styled.div`
  display: flex;
`;

export const BannerImage = styled.img`
  display: flex;
  opacity: 60%;

  @media (min-width: 768px) {
    max-height: 600px;
  }
  @media (min-width: 1280px) {
    max-height: 700px;
  }
  @media (min-width: 1980px) {
    max-height: 800px;
  }
`;

export const BannerTitle = styled.h1`
  display: flex;
  margin-left: 30px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const BannerDescription = styled.h4`
  margin-top: 12px;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  margin-left: 30px;
  color: white;
  width: 90%;
  text-align: start;
  font-size: 20px;

  @media (max-width: 768px) {
    display: none;
  }

  @media (min-width: 1280px) {
    width: 70%;
  }
`;

export const BannerDescriptionContainer = styled.div`
  position: absolute;
  bottom: 60px;

  @media (max-width: 768px) {
    bottom: 20px;
  }

  @media (min-width: 1280px) {
    max-height: 700px;
  }
`;

export const IMDBContainer = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: 30px;
  right: 90px;
  display: flex;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
  }
`;
export const StarIcon = styled(AiFillStar)`
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const AverageText = styled.p`
  font-family: 'Roboto', sans-serif;
  margin-left: 8px;
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 16px;
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
  font-family: 'Roboto', sans-serif;
  color: #050e12;
  font-weight: 700;
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

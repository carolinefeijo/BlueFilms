// eslint-disable import/prefer-default-export
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #191b1f;
  padding-left: 30px;
  padding-bottom: 80px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin: 50px 0px 50px 0px;
  gap: 30px;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ImagePoster = styled.img`
  display: flex;
  width: 170px;
  height: 170px;
  border-radius: 100%;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: #ffb800;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SubTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-weight: 100;
  font-size: 16px;
  color: white;
  @media (max-width: 768px) {
    font-size: 13px;
    text-align: center;
  }
`;

export const biographyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 60px 0px;
`;

export const biographyTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: white;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const biographySubTitle = styled.h3`
  margin-top: 25px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  color: white;
  width: 90%;
  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

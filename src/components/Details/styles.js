/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { AiFillStar } from 'react-icons/ai';

export const Container = styled.div`
  display: block;
  background-color: #191b1f;
`;

export const ImageBackground = styled.img`
  /* display: flex; */
  /* background-image: url('https://s3-alpha-sig.figma.com/img/ea2c/54af/9e873b65b95c997dd5556f01a7a48716?Expires=1675641600&Signature=k6Kn2WldiPOQjf3q83ZBhxkSa6JnhscJnz6O20Qf-j2-WBiF9RyuZrEUQtaCZbqIixeKrI6nye7Nr8K7Aktc4FUwMt8smFOcxNS3ubOgwmOcft5ezbTlfDuahBtaACr9y3OnPt88cKyzbGetGYZQV-sVw2TNOQ8VXw1GQtrhOLTZoX2-Aw7QKfpOPOk6PSTZNHqRpFxDNcu9Udb~jiQXsLpf3BJwrTsq2SH6OUNe33LeqEveKgHWyjXKfp0bgHyBC1~xs7BpKxxbhSmZFgExBy4UM9tPTRvuEkE7nIxrcsKgCx~8jA~0iFSMSi7pkF0T4VNxYwtg0HQJwobuhRKnrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'); */
  /* height: 480px;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.8;
  width: 100%;
  object-fit: cover; */
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: top;
`;

export const ContainerImage = styled.img`
  position: absolute;
  width: 205px;
  height: 308px;
  left: 70px;
  top: 500px;
  object-fit: cover;
`;

export const Title = styled.h3`
  font-family: Inter, sans-serif;
  font-style: normal;
  margin-left: 310px;
  font-weight: 500;
  text-align: left;
  color: white;
  margin-top: 15px;
`;

export const DescriptionStar = styled.h4`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 38px;
  color: white;
  margin-left: 310px;
  text-align: left;
`;
export const StarIcon = styled(AiFillStar)``;

export const DescriptionFilm = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #191b1f;
  margin-bottom: 70px;
`;
export const TitleDescription = styled.h2`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 72px;
  margin-top: 100px;
  color: white;
`;

export const SubTitle = styled.h4`
  margin-top: 20px;
  width: 700px;
  font-family: Inter, sans-serif;
  font-style: normal;
  margin-left: 72px;
  font-weight: 500;
  text-align: left;
  color: white;
`;

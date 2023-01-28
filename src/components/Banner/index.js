import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import * as S from './styles';

export default function Banner({ list }) {
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  const navigate = useNavigate();

  const handleMovieDetail = (movieId) => {
    navigate('/moviedetail', { state: { id: movieId } });
  };

  return (
    <>
      {list && (
        <S.BannerContainer>
          <Carousel
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
          >
            {list.map((item, key) => (
              <S.CardContainer
                onClick={() => handleMovieDetail(item.id)}
                key={key}
              >
                <S.BannerCard>
                  <S.BannerImage
                    src={`${baseUrl}${item.backdrop_path}`}
                    alt={item.title}
                  />
                </S.BannerCard>

                <S.BannerDescriptionContainer>
                  <S.BannerTitle>{item.title}</S.BannerTitle>
                  <S.BannerDescription>{item.overview}</S.BannerDescription>
                </S.BannerDescriptionContainer>

                <S.IMDBContainer>
                  <S.StarIcon color="#FFB800" size={33} />
                  <S.AverageText>
                    {item.vote_average.toFixed(1)}/10
                  </S.AverageText>
                  <S.Slogan>
                    <S.SloganText>IMDb</S.SloganText>
                  </S.Slogan>
                </S.IMDBContainer>
              </S.CardContainer>
            ))}
          </Carousel>
        </S.BannerContainer>
      )}
    </>
  );
}

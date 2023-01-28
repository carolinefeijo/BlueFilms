import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { useLocation } from 'react-router-dom';

import { GetActorDetails, GetPopularMovies } from '../../services/api';
import moment from 'moment/moment';
import ListFilms from '../../components/ListFilms';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

export default function ActorDetail() {
  const { state } = useLocation();

  const [actorDetails, setActorDetails] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const actorDetailsResponse = await GetActorDetails(state.id);
      setActorDetails(actorDetailsResponse);

      const moviesResponse = await GetPopularMovies();
      setMovies(moviesResponse.results);
    };
    fetchData();
  }, []);

  return (
    <>
      {actorDetails && (
        <S.Container>
          <S.ProfileContainer>
            <S.ImagePoster src={`${baseUrl}${actorDetails.profile_path}`} />
            <S.ProfileDetails>
              <S.Title>{actorDetails.name}</S.Title>
              <S.SubTitle>
                {moment().diff(actorDetails.birthday, 'years', false)}
              </S.SubTitle>
              <S.SubTitle>{actorDetails.place_of_birth}</S.SubTitle>
            </S.ProfileDetails>
          </S.ProfileContainer>

          {actorDetails.biography && (
            <S.biographyContainer>
              <S.biographyTitle>Biografia</S.biographyTitle>
              <S.biographySubTitle>
                {actorDetails.biography}
              </S.biographySubTitle>
            </S.biographyContainer>
          )}

          <ListFilms movieList={movies} title={'Filmografia'} />
        </S.Container>
      )}
    </>
  );
}

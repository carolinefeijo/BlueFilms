import React from 'react';
import Footer from '../Footer/Index';
import * as S from './styles';

export default function Details() {
  return (
    <S.Container>
      <S.ImageBackground src="https://s3-alpha-sig.figma.com/img/ea2c/54af/9e873b65b95c997dd5556f01a7a48716?Expires=1675641600&Signature=k6Kn2WldiPOQjf3q83ZBhxkSa6JnhscJnz6O20Qf-j2-WBiF9RyuZrEUQtaCZbqIixeKrI6nye7Nr8K7Aktc4FUwMt8smFOcxNS3ubOgwmOcft5ezbTlfDuahBtaACr9y3OnPt88cKyzbGetGYZQV-sVw2TNOQ8VXw1GQtrhOLTZoX2-Aw7QKfpOPOk6PSTZNHqRpFxDNcu9Udb~jiQXsLpf3BJwrTsq2SH6OUNe33LeqEveKgHWyjXKfp0bgHyBC1~xs7BpKxxbhSmZFgExBy4UM9tPTRvuEkE7nIxrcsKgCx~8jA~0iFSMSi7pkF0T4VNxYwtg0HQJwobuhRKnrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
      <S.ContainerImage src="https://www.itaucinemas.com.br/_img/_filmes/3939_capa.jpg?Mulher-Maravilha-1984" />

      <S.Title> Mulher Maravilha 1984</S.Title>
      <S.DescriptionStar>
        <S.StarIcon color="#FFB800" size={33} />
        6.9/10
      </S.DescriptionStar>

      <S.DescriptionFilm>
        <S.TitleDescription>Visão Geral</S.TitleDescription>
        <S.SubTitle>
          A Mulher Maravilha entra em conflito com a União Soviética durante a
          Guerra Fria na década de 1980 e encontra um adversário formidável
          chamado Cheetah.
        </S.SubTitle>
      </S.DescriptionFilm>

      <Footer />
    </S.Container>
  );
}

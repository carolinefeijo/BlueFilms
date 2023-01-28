import React, { useState } from 'react';
import * as S from './styles';

import { useNavigate } from 'react-router-dom';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import ActorCard from '../ActorCard';

export default function ListActors({ actorsList, title }) {
  const navigate = useNavigate();

  const handleActorDetail = (actorId) => {
    navigate('/actordetail', { state: { id: actorId } });
  };

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let value = scrollX + Math.round(window.innerWidth / 2);
    if (value > 0) {
      value = 0;
    }
    setScrollX(value);
  };
  const handleRigthArrow = () => {
    // faz o calculo de quantos card da e joga pra direita e divide o tamanho por porporção de tela
    let value = scrollX - Math.round(window.innerWidth / 2);
    const listWidth =
      actorsList.length * (window.innerWidth >= 768 ? 225 : 144);
    if (window.innerWidth - listWidth > value) {
      value = window.innerWidth - listWidth - 0;
    }
    setScrollX(value);
  };

  return (
    <>
      {actorsList && (
        <S.Container>
          <S.CategoryTitle>{title}</S.CategoryTitle>

          <S.RowLeft onClick={handleLeftArrow}>
            <MdNavigateBefore size={50} color={'white'} />
          </S.RowLeft>

          <S.RowRigth onClick={handleRigthArrow}>
            <MdNavigateNext size={50} color={'white'} />
          </S.RowRigth>

          <S.ListContainer mg={scrollX} width={actorsList.length * 212}>
            {actorsList?.map((item, key) => (
              <ActorCard
                key={key}
                item={item}
                handleActor={handleActorDetail}
              />
            ))}
          </S.ListContainer>
        </S.Container>
      )}
    </>
  );
}

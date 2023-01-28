/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

export const Container = styled.div`
  overflow-x: hidden;
  display: inline-block;
  @media (max-width: 768px) {
  }
`;

export const ListContainer = styled.div`
  width: ${(props) => props.width}px;
  margin-left: ${(props) => props.mg}px;
  transition: 0.5s;
  display: flex;
  gap: 22px;
  margin-top: 10px;

  @media (max-width: 768px) {
    margin-left: ${(props) => props.mg}px;
  }
`;

export const CategoryTitle = styled.h1`
  color: white;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const RowLeft = styled.button`
  display: flex;
  margin-top: 100px;
  background-color: aqua;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  position: absolute;
  background: transparent;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.6);
  border-radius: 80px;
  left: 0;
  z-index: 99;
  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    left: 10px;
    margin-top: 80px;
  }
`;

export const RowRigth = styled.button`
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  position: absolute;
  background: transparent;
  border: none;
  outline: none;
  background-color: rgba(0, 0, 0, 0.6);
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.6);
  border-radius: 80px;
  right: 0;
  z-index: 99;
  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    right: 10px;
    margin-top: 80px;
  }
`;

export const IconBefore = styled(MdNavigateBefore)``;

export const IconNext = styled(MdNavigateNext)``;

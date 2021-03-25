import styled from 'styled-components';

export const TxtL = styled.h1`
  font-size: 14px;
  color: #fff;
`;

export const TxtM = styled.p`
  font-size: 12px;
  color: #fff;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161616;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 8px;
  justify-content: start;
  align-items: center;
`;

export const Banners = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161616;
  justify-content: flex-start;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2vh;
`;

export const CurrentPane = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161616;
`;

export const Weather = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Temp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5vh 3vw;
`;

// .title {
export const Title = styled.h1`
  justify-self: center;
  align-self: center;
`;

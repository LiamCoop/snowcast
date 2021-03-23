import styled from 'styled-components';

export const TxtL = styled.h1`
  font-size: 14px;
  color: #fff;
`;
export const TxtM = styled.p`
  font-size: 12px;
  color: #fff;
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /*height: 30em;
    width: 60%;*/
  background-color: #161616;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161616;
  justify-content: center;
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

// weather p {
export const WeatherText = styled.p`
  margin-top: 2px;
`;

export const Temp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5vh 3vw;
`;

//.temp h1 {
export const TempText = styled.h1`
  font-size: 16px;
`;

export const TempTextp = styled.p`
  font-size: 14px;
`;

// .titlecontainer {
export const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 3vh);
  column-gap: 20px;
  min-height: 5vh;
  max-height: 10vh;
`;

// .title {
export const Title = styled.h1`
  justify-self: center;
  align-self: center;
`;

// .city {
export const City = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
`;

// .propCity {
export const PropCity = styled.div`
  grid-column-start: 1;
  grid-row-start: 2;
`;

// .dt {
export const Dt = styled.div`
  grid-column-start: 2;
  grid-row: span 2 / -1;
`;

// .area {
export const Area = styled.div`
  grid-column-start: 3;
  grid-row-start: 1;
`;

export const PropArea = styled.div`
  grid-column-start: 3;
  grid-row-start: 2;
`;

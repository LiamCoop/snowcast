import styled from 'styled-components';

export const Button = styled.button`
  background-color: #161616;
  color: #fff;
  position: relative;
  height: 24px;
  z-index: 2;
`;

export const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

export const SwContainer = styled.div`
  justify-self: end;
  grid-column-start: -1;
`;

export const RegBtnContainer = styled.div`
  justify-self: start;
  row: 1 / -1;
`;
export const BannerContainer = styled.div``;

export const SocialContainer = styled.div`
  justify-self: end;
  align-self: end;
  grid-row-start: -1;
  grid-column-start: -1;
`;

export const ButtonsContainer = styled.div`
  display: grid;
  gap: 0px;
  grid-template-rows: 1fr 1fr;
  grid-auto-flow: row;
`;

export const Sw = styled.div`
  width: 250px;
  height: 50px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: #161616;
`;

export const DDcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 160px);
  grid-auto-flow: row;
`;

export const Metric = styled.p`
  justify-self: center;
  font-size: 14px;
`;

export const Imperial = styled.p`
  justify-self: center;
  font-size: 14px;
`;

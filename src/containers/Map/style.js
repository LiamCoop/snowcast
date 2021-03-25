import styled from 'styled-components';

export const Button = styled.button`
  background-color: #161616;
  color: #fff;
  height: 30px;
  width: 110px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BtnText = styled.p`
  font-size: 11px;
`;
export const DDcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const ControlsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  grid-template-rows: 50px auto 50px;
`;

export const SwContainer = styled.div`
  justify-self: end;
  grid-row-start: 1;
  grid-column-start: 2;
`;

export const RegBtnContainer = styled.div``;

export const BannerContainer = styled.div``;

export const SocialContainer = styled.div`
  align-self: end;
  justify-self: end;
  grid-column-end: -1;
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

export const Metric = styled.p`
  justify-self: center;
  font-size: 14px;
`;

export const Imperial = styled.p`
  justify-self: center;
  font-size: 14px;
`;

import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #161616;
  color: #fff;
  width: auto;
  height: 3.5vh;
  z-index: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LinkFmt = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
  grid-row-start: -1;
  margin-bottom: 0px;
`;

export const Txt = styled.p`
  font-size: 12px;
  line-height: 12px;
  margin: 0px;
  color: #161616;
`;

export const Link = styled.a`
  font-size: 12px;
  color: #161616;
`;

export const BtnText = styled.p`
  font-size: 12px;
  line-height: 10px;
  text-overflow: ellipsis;
`;

export const DDcontainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 150px);
  grid-row-start: 2;
`;

export const ControlsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(250px, 1fr) minmax(250px, 1fr);
  grid-template-rows: 50px 1fr;
`;

export const SwContainer = styled.div`
  justify-self: end;
  grid-row-start: 1;
  grid-column-start: -1;
`;

export const RegBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BannerContainer = styled.div``;

export const SocialContainer = styled.div`
  align-self: end;
  padding-bottom: 25px;
  justify-self: end;
  grid-column: -1;
  grid-row: -1;
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

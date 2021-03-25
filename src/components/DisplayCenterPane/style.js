import styled from 'styled-components';

export const TxtL = styled.h1`
  font-size: 14px;
  font-weight: 600;
  line-height: 11px;
  color: #fff;
`;

export const TxtM = styled.p`
  margin: 6px 2px;
  font-size: 12px;
  line-height: 12px;
  color: #fff;
`;

export const TxtInterval = styled.p`
  margin: 0px 2px 5px;
  font-size: 12px;
  line-height: 12px;
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: start;
  align-items: center;
`;

export const Title = styled.h1`
  max-width: 300px;
  justify-self: center;
  align-self: center;
  font-size: 14px;
  margin-bottom: 12px;
`;

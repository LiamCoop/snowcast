import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CurrentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const Text = styled.p`
  background-color: #161616;
  border: 1px solid black;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #161616;
  cursor: pointer;
  color: #fff;
  z-index: 2;
`;

export const BButton = styled(Button)`
  &:hover {
    background-color: #383838;
  }
`;
export const BtnText = styled.p`
  font-size: 12px;
`;

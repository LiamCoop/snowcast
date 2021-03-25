import styled, { keyframes } from 'styled-components';

const fadeAway = keyframes`
  to {
    width: 0;
    height: 0;
    overflow: hidden;
  }
`;

export const Container = styled.div`
  background: #161616;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  height: 50px;
  width: 220px;
  overflow: visible;
  opacity: 0.2;
`;
/*
  -moz-animation: ${fadeAway} 0s ease-in 5s forwards;
  -webkit-animation: ${fadeAway} 0s ease-in 5s forwards;
  -o-animation: ${fadeAway} 0s ease-in 5s forwards;
  animation: ${fadeAway} 0s ease-in 5s forwards;
`;
*/

export const Text = styled.p``;

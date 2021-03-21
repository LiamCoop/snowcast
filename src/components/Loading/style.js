import styled, { keyframes } from 'styled-components';

const load = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
//.load {
export const Load = styled.div`
  display: inline-block;
  justify-content: center;
  width: 80px;
  height: 80px;
  :after {
    content: ' ';
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #cef;
    border-color: #cef transparent #cef transparent;
    animation: ${load} 1.2s linear infinite;
  }
`;

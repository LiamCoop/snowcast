import styled from "styled-components";

export const Button = styled.button`
    background-color: #161616;
    color: #fff;
    position: relative;
    height: 24px;
    z-index: 2;
`;

export const ControlsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-flow: column;
`;

export const ButtonsContainer = styled.div`
    display: grid;
    gap: 0px;
    grid-template-rows: 1fr 1fr;
    grid-auto-flow: row;
`;

export const Sw = styled.div`
    width: 220px;
    height: 50px;
    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    place-items: center;
    background-color: #161616;
`;

export const Metric = styled.p`
    font-size: 14px;
    grid-column-start: 1;
`;

export const Imperial = styled.p`
    font-size: 14px;
    grid-column: 3 / 4;
`;

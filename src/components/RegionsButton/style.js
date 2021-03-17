import styled from "styled-components";

/*
body {
    font-family: "Mulish", sans-serif;
    background-color: var(--background-color);
}
*/

/*
const swing = styled.keyframes`
    50% {
        transform: rotateZ(10deg) scale(0.4);
    }
`;

const flash = styled.keyframes`
    50% {
        border-color: #485563;
    }
`;
*/

export const Btn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 220px;
    height: 50px;

    background-color: #161616;
    cursor: pointer;
    font-size: 20px;
    color: var(--color);
    transition: all 0.3s;
    position: relative;

    text-align: center;
    overflow: hidden;

    border-radius: 5px;
    box-shadow: 0 6px 30px -10px rgba(#cccccc, 1);
    z-index: 1;
`;

export const BtnName = styled.div`
    position: relative;
    color: #fff;
    animation: flash 3s infinite;
    z-index: 1;
`;

// .snowflake-grid {
export const SnowflakeGrid = styled.div`
    display: inline-grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 50px;
    gap: 5px;

    width: 100px;
    transform: scale(0.4);
    div {
        border-radius: 5px;
    }

    .snowflake-item {
        position: relative;
    }
`;

/*

export const ToLeft = styled.div`
    position: absolute;
    top: -4px;
    left: -35px;
    animation: ${swing} 3s infinite;
    div {
        animation: ${flash} 3s infinite;
    }
`;

export const ToRight = styled.div`
    position: absolute;
    top: -25px;
    right: -35px;
    animation: ${swing} 2.5s infinite;
    div {
        animation: ${flash} 2.5s infinite;
    }
`;

/*
// .border-left {
export const BorderLeft = styled.div`
    border-left: 4px solid #e6dada;
`;

// .border-right {
export const BorderRight = styled.div`
    border-right: 4px solid #e6dada;
`;

// .border-bottom {
export const BorderBottom = styled.div`
    border-bottom: 4px solid #e6dada;
`;

// .border-top {
export const BorderTop = styled.div`
    border-top: 4px solid #e6dada;
`;

// .sub-items {
export const SubItems = styled.div`
    height: 28px;
    width: 28px;
`;

// .m-w-15 {
export const MW15 = styled.div`
    width: 15px;
`;

// .m-h-15 {
export const MH15 = styled.div`
    height: 15px;
`;

export const R270 = styled.div`
    transform: rotate(270deg);
`;

// .r-180 {
export const R180 = styled.div`
    transform: rotate(180deg);
`;

// .r-90 {
export const R90 = styled.div`
    transform: rotate(90deg);
`;

// .pull-down {
export const PullDown = styled.div`
    position: absolute;
    bottom: 5px;
    right: 5px;
`;

// .pull-down-right {
export const PullDownRight = styled.div`
    position: absolute;
    bottom: 5px;
    left: 5px;
`;

// .pull-right {
export const PullRight = styled.div`
    position: absolute;
    right: 5px;
    top: 5px;
`;

// .pull-left {
export const PullLeft = styled.div`
    position: absolute;
    left: 5px;
    top: 5px;
`;

// .m-3 {
export const M3 = styled.div`
    margin: 3px;
`;

*/

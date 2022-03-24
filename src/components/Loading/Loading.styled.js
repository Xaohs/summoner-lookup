import styled, { css } from 'styled-components'
import loading from "./Loading";

export const LoadingStyled = styled.div(
(props) => css`
  position: absolute;
  
  .dot-revolution {
    position: relative;
    ${props.where === "loadingSummonerData" && css`
        margin: 150px 0 0 50px;
    `}
    ${props.where === "loadingMatchHistory" && css`
        margin: 200px 0 0 500px;
    `}
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: #9880ff;
    color: #9880ff;
    z-index: 1;
  }

  .dot-revolution::before, .dot-revolution::after {
    content: '';
    display: inline-block;
    position: absolute;
  }

  .dot-revolution::before {
    left: 0;
    top: -22.5px;
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: #9880ff;
    color: #9880ff;
    transform-origin: 7.5px 30px;
    animation: dotRevolution 1.4s linear infinite;
  }

  .dot-revolution::after {
    left: 0;
    top: -45px;
    width: 15px;
    height: 15px;
    border-radius: 7.5px;
    background-color: #9880ff;
    color: #9880ff;
    transform-origin: 7.5px 50px;
    animation: dotRevolution 1s linear infinite;
  }

  @keyframes dotRevolution {
    0% {
      transform: rotateZ(0deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotateZ(360deg) translate3d(0, 0, 0);
    }
  }
`
    );
import styled from 'styled-components'

export const LoadingStyled = styled.div`

  .dot-revolution {
    position: relative;
    margin: auto;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
  }

  .dot-revolution::before, .dot-revolution::after {
    content: '';
    display: inline-block;
    position: absolute;
  }

  .dot-revolution::before {
    left: 0;
    top: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    transform-origin: 5px 20px;
    animation: dotRevolution 1.4s linear infinite;
  }

  .dot-revolution::after {
    left: 0;
    top: -30px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    transform-origin: 5px 35px;
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
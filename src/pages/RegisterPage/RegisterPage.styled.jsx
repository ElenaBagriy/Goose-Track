import styled from 'styled-components';
import { keyframes } from 'styled-components';
import goose1x from '../../images/SignUpPage/signUpGoose@1x.png';
import goose2x from '../../images/SignUpPage/signUpGoose@2x.png';
import text1x from '../../images/SignUpPage/elements@1x.png';
import text2x from '../../images/SignUpPage/elements@2x.png';

const expandBounce = keyframes`
0% {
  transform: scale(0);
}
50% {
  transform: scale(1.25);
}
100% {
  transform: scale(1);
}
`;


export const Section = styled.section`
    background-color: ${props => props.theme.colors.lightBlue};
    height: 100vh;
    padding: 20px;
`;

export const FormWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Goose = styled.div`
    position: absolute;
    bottom: 0;
    left: 49px;
    width: 401px;
    height: 344px;
    background-image: url(${goose1x});
    background-repeat: no-repeat;
    background-size: cover;
    
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
      background-image: url(${goose2x});
  }
`;

  export const SpeechBubble = styled.div`
  position: absolute;
  /* left: 49px; */
  bottom: 0;
  width: 400px;
  height: 416px;
  transform-origin: 0% 100%;
  /* text-align: center; */
  background-image: url(${text1x});
    background-repeat: no-repeat;
    background-size: cover;
    
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
      background-image: url(${text2x});
  }

  transform: scale(0);
  animation-name: ${expandBounce};
  animation-duration: 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards;

  /* &::before {
    content: "";
    display: block;
    width: 0;
    position: absolute;
    bottom: -25px;
    left: 5px;
    border-style: solid;
    border-width: 15px;
    border-color: #5a5a5a transparent transparent #5a5a5a;
    transform: rotate(10deg);
  } */

  `;


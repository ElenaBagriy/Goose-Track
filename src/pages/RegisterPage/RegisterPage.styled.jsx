import styled from 'styled-components';
import { keyframes } from 'styled-components';
import goose1x from '../../images/SignUpPage/signUpGoose@1x.png';
import goose2x from '../../images/SignUpPage/signUpGoose@2x.png';

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
    bottom: 233px;
    left: 30.97px;
    transform: scale(0);
    animation-name: ${expandBounce};
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    
    & svg{
      transform: rotate(-24deg);
    }
  `;

export const Text = styled.div`
    position: absolute;
    box-sizing: content-box;
    top: 28.67px;;
    left: 12.8px;
    width: 141px;
    color: #111;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.14;
    overflow: hidden;
    transform: rotate(-27deg);
    margin: 0 auto;
    
    & .accent {
      color: ${props => props.theme.colors.mainBlue};
    }

`;

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 49px;
  width: 400px;
  height: 416px;
`
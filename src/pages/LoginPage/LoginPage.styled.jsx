import styled from 'styled-components';
import { keyframes } from 'styled-components';
import rocket1x from '../../images/LoginPage/rocket@1x.png';
import rocket2x from '../../images/LoginPage/rocket@2x.png';

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
    width: 369px;
    height: 447px;
    background-image: url(${rocket1x});
    background-repeat: no-repeat;
    background-size: cover;
    
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
      background-image: url(${rocket2x});
  }
`;


export const SpeechBubble = styled.div`
    position: absolute;
    top: 0px;
    left: 104px;
    transform: scale(0);
    animation-name: ${expandBounce};
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    
    & svg{
      transform: rotate(18deg);
    }
  `;

export const Text = styled.div`
    position: absolute;
    box-sizing: content-box;
    top: 27.7px;;
    left: 30.06px;
    width: 138px;
    color: #111;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.14;
    overflow: hidden;
    transform: rotate(18deg);
    margin: 0 auto;
    
    & .accent {
      color: ${props => props.theme.colors.mainBlue};
    }

`;

export const ImageWrapper = styled.div`
  position: absolute;
  bottom: 19px;
  right: 60px;
  width: 368px;
  height: 521px;
`
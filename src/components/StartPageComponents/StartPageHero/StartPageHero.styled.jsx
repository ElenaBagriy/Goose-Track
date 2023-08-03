import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import gooseMobile1x from '../../../images/StartPage/goose-mobile@1x.png';
import gooseMobile2x from '../../../images/StartPage/goose-mobile@2x.png';
import gooseDesktop1x from '../../../images/StartPage/goose-desktop@1x.png';
import gooseDesktop2x from '../../../images/StartPage/goose-desktop@2x.png';

export const Header = styled.header`
  height: 812px;
  padding-top: 256px;
  padding-bottom: 256px;
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
  background-color: ${(props) => props.theme.colors.mainBlue};
  color: ${(props) => props.theme.colors.white};


  @media screen and (min-width: 768px) and (max-width: 1399px) {
    height: 1024px;
    padding-top: 330px;
    padding-bottom: 330px;
    padding-left: 32px;
    padding-right: 32px;
  }

    @media screen and (min-width: 1400px) {
      min-height: 770px;
      height: 100vh;
      padding-top: 187px;
      padding-bottom: 200px;
      padding-left: 128px;
      padding-right: 128px;
    }
  `;

export const Title = styled.h1`
    margin-bottom: 32px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 44px;
    text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07);
    line-height: 1.09;
    letter-spacing: 0;

    span {
      font-style: italic;
    }

    @media screen and (min-width: 768px) {
        margin-bottom: 40px;
        font-size: 100px;
        line-height: 1.3;
    }

    @media screen and (min-width: 1400px) {
        font-size: 120px;
        line-height: 1.25;
    }
`;

export const Image = styled.div`
    width: 142px;
    height: 142px;
    margin: 0 auto;
    background-image: url(${gooseMobile1x});
    background-repeat: no-repeat;
    background-size: cover;
    
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
      background-image: url(${gooseMobile2x});
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
    background-image: url(${gooseDesktop1x});
    background-repeat: no-repeat;
    background-size: cover;
    
    @media screen and (min-device-pixel-ratio: 2),
      screen and (min-resolution: 192dpi),
      screen and (min-resolution: 2dppx) {
        background-image: url(${gooseDesktop2x});
    }
  }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-direction: column-reverse;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        gap: 24px;
    }
`;

export const LoginButton = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    width: 131px;
    height: 46px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.colors.white};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;
    letter-spacing: -0.28px;
    color: ${(props) => props.theme.colors.mainBlue};
    transition: color ${props => props.theme.hover.transition}, box-shadow ${props => props.theme.hover.transition} ;


    @media screen and (min-width: 768px) {
        width: 121px;
        height: 49px;
    }

    &:hover,
    &:focus {
        color: ${(props) => props.theme.button.hover};
        box-shadow: ${props => props.theme.hover.boxShadow};
    }

    & svg {
      stroke: #3E85F3;
    }
`;

export const SignupButton = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;   
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.17;
    letter-spacing: -0.28px;
    color: ${(props) => props.theme.colors.white};
    text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07);
    text-decoration-line: underline;
    transition: color ${props => props.theme.hover.transition};


    @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.29;
    }

    &:hover,
    &:focus {
        color: ${(props) => props.theme.colors.lightBlue};
    }
`;
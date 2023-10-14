import styled from 'styled-components';
import goose1x from '../../../images/Header/motivationGoose@1x.png';
import goose2x from '../../../images/Header/motivationGoose@2x.png';

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`;

export const Title = styled.h1`
  display: none;

  @media screen and (min-width: 1400px) {
    display: block;
    color: ${props => props.theme.text.input};
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
  }
`;

export const Box = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 14px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const TitleWithMotivationWrapper = styled.div`
  display: flex;
  gap: 8px;
  /* margin-bottom: 32px; */
`;

export const MotivationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Goose = styled.div`
    width: 64px;
    height: 60px;
    background-image: url(${goose1x});
    background-repeat: no-repeat;
    background-size: cover;
    
  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    screen and (min-resolution: 2dppx) {
      background-image: url(${goose2x});
  }
`;

export const Motivation = styled.p`
  color: ${props => props.theme.text.input};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.29;

  & span {
    color: ${props => props.theme.colors.mainBlue};
  }
`;
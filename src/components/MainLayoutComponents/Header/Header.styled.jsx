import styled from 'styled-components';

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h1`
  display: none;

  @media screen and (min-width: 1400px) {
    display: block;
    color: #111;
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

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;
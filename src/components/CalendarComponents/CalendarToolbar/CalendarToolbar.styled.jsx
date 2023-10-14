import styled from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 64px;
    margin-bottom: 24px;

  @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 0;
      justify-content: space-between;
      margin-top: 65px;
      margin-bottom: 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 32px;
  }
`;
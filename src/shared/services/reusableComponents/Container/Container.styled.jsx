import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  };
  
  @media screen and (min-width: 1400px) {
    max-width: 1440px;
    padding-left: 24px;
    padding-right: 32px;
  }
`;
import styled from "styled-components";

export const StyledContainer = styled.div`
  flex-grow: 1;
  max-width: 375px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 24px;
  margin: 0 auto;
  
  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 25px;
  };
  
  @media screen and (min-width: 1400px) {
    max-width: 1440px;
    padding-left: 24px;
    padding-right: 32px;
    padding-top: 40px;
  }
`;
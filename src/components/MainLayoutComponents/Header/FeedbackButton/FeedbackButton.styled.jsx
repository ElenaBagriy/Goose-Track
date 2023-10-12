import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  padding: 8px 20px;
  align-items: center;
  border: none;
  border-radius: 10px;
  color: ${props => props.theme.colors.white};
  text-align: center;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33; 
  height: 32px;
  background-color: ${props => props.theme.colors.mainBlue};
  transition: background-color ${props => props.theme.hover.transition}, box-shadow ${props => props.theme.hover.transition};

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    border-radius: 14px;
    font-size: 14px;
    line-height: 1.29; 
    height: 42px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.button.hover};
    box-shadow: ${props => props.theme.button.boxShadow};
  }
`;
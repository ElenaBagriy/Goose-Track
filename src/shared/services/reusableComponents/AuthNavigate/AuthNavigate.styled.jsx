import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Navigate = styled(NavLink)`
  margin-top: 18px;
  display: block;
  text-align: center;
  text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-decoration-line: underline;
  color: ${props => props.theme.colors.mainBlue};
  transition: color ${props => props.theme.hover.transition}, scale ${props => props.theme.hover.transition};

  @media screen and (min-width: 768px) {
    margin-top: 24px;
    font-size: 18px;
    line-height: 1.33;
  }

  &:hover,
  &:focus {
    color: ${props => props.theme.button.hover};
    scale: 1.01;
  }
`;
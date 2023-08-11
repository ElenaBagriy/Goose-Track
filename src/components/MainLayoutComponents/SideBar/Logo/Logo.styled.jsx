import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LogoText = styled.p`
    color: ${props => props.theme.text.logo};
    text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04), 0px 47px 355px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.38; 
    
    @media screen and (min-width: 768px) {
        line-height: 1.5; 
    }

    @media screen and (min-width: 1400px) {
        font-size: 24px;
        line-height: 1; 
    }
`;

export const AccentText = styled.span`
    font-style: italic;
`;

export const LogoWrapper = styled(NavLink)`
    display: flex;
    gap: 6px;
    align-items: center;
    transition: scale ${props => props.theme.hover.transition};

    @media screen and (min-width: 1400px) {
        gap: 10px;
    }

    &:hover,
    &:focus {
        scale: 1.1;
    }
`;
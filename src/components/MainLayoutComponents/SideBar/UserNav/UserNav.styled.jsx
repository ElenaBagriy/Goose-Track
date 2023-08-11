import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
    color: ${props => props.theme.text.panel};
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
        font-size: 14px;
        margin-bottom: 32px;
    }
`;

export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 18px;

    @media screen and (min-width: 768px) {
        gap: 16px;
    }
`;

export const Link = styled(NavLink)`
    display: flex;
    gap: 8px;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 12px;
    color: ${props => props.theme.text.nav};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 8px;
    transition: background-color ${props => props.theme.hover.transition}, color ${props => props.theme.hover.transition}, fill ${props => props.theme.hover.transition}, stroke ${props => props.theme.hover.transition};
    
    &:hover {
        background-color: ${props => props.theme.hover.linkBg};
        color: ${props => props.theme.hover.linkText};

        & svg {
            fill: ${props => props.theme.hover.linkText};
            stroke: ${props => props.theme.hover.linkText};
        }
    }
    
    &:focus,
    &.active {
        background-color: ${props => props.theme.colors.activeLink};
        color: ${props => props.theme.text.activeLink};

        & svg {
            fill: ${props => props.theme.text.activeLink};
            stroke: ${props => props.theme.text.activeLink};
        }
    }

    & svg {
        fill: ${props => props.theme.text.nav};
        stroke: ${props => props.theme.text.nav};
        transition: fill ${props => props.theme.hover.transition}, stroke ${props => props.theme.hover.transition};
        width: 20px;
        height: 20px;
    }

    @media screen and (min-width: 768px) {
        font-size: 16px;
        gap: 10px;
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 20px;

        & svg {
            width: 24px;
            height: 24px;
        }
    }
`;
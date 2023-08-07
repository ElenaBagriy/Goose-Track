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
    color: ${props => props.theme.text.nav};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    @media screen and (min-width: 768px) {
        font-size: 16px;
    }
`;
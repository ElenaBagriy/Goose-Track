import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const TypeNav = styled.nav`
    display: flex;
`;

export const DayButton = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 76px;
    height: 34px;
    color: ${props => props.theme.colors.mainBlue};
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.29; 
    border-radius: 0px 8px 8px 0px;
    background-color: ${props => props.theme.tablet.unactive};
    
    @media screen and (min-width: 768px) {
        width: 82px;
        font-size: 16px;
        line-height: 1.13; 
    }
`;

export const MonthButton = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 76px;
    height: 34px;
    color: ${props => props.theme.colors.mainBlue};
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.29; 
    border-radius: 8px 0px 0px 8px;
    border-right: 1px solid ${props => props.theme.tablet.divider};
    background-color: ${props => props.theme.tablet.unactive};

    @media screen and (min-width: 768px) {
        width: 82px;
        font-size: 16px;
        line-height: 1.13; 
    }
`;

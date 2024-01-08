import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    justify-content: space-around;
    max-width: 335px;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.button.border};
    background-color: ${props => props.theme.colors.weekDays};
    color: ${props => props.theme.text.header};
    text-align: center;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.13;
    text-transform: uppercase;
    
    @media screen and (min-width: 768px) {
        width: 704px;
    }

    @media screen and (min-width: 1440px) {
        width: 1087px;
    }
    
`;

export const Item = styled.li`
    display: flex;
    max-width: 48px;
    height: 50px;
    align-items: center;
    justify-content: center;

    &:nth-last-child(-n+2) {
        color: ${props => props.theme.colors.mainBlue};
    }

    @media screen and (min-width: 768px) {
        width: 155px;
        height: 46px;
    }
`
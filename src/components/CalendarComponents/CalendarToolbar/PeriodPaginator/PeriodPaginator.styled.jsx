import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (min-width: 768px) {
        justify-content: flex-start;
        gap: 8px;
    }
`;

export const Date = styled.p`
    display: flex;
    padding: 6px 12px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.mainBlue};
    color:${props => props.theme.colors.white};
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.29;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        padding: 8px 12px;
        font-size: 14px;
        line-height: 1.13;
    }
`;

export const ButtonList = styled.ul`
    display: flex;
`;

export const DecreaseButton = styled.button`
    width: 36.5px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.page};
    border: 1px solid ${props => props.theme.button.border};
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    transition: background-color ${props => props.theme.hover.transition}, box-shadow ${props => props.theme.hover.transition};
    

    & svg {
        width: 16px;
        height: 16px;
        stroke: ${props => props.theme.text.header};
        transition: stroke ${props => props.theme.hover.transition};

    @media screen and (min-width: 768px) {
        width: 18px;
        height: 18px;
    }
    }

    &:hover,
    &:focus {
        box-shadow: ${props => props.theme.button.boxShadow};
        & svg {
            /* stroke: ${props => props.theme.colors.white}; */
        }
    }

    @media screen and (min-width: 768px) {
        width: 38.5px;
        height: 34px;
    }
`;

export const IncreaseButton = styled.button`
    width: 35.5px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.page};
    border: 1px solid ${props => props.theme.button.border};
    border-left: none;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    transition: background-color ${props => props.theme.hover.transition}, box-shadow ${props => props.theme.hover.transition};

    
    & svg {
        width: 16px;
        height: 16px;
        stroke: ${props => props.theme.text.header};
        transition: stroke ${props => props.theme.hover.transition};

        @media screen and (min-width: 768px) {
        width: 18px;
        height: 18px;
    }
    }

    &:hover,
    &:focus {
        /* background-color: ${props => props.theme.colors.mainBlue}; */
        box-shadow: ${props => props.theme.button.boxShadow};
        & svg {
            /* stroke: ${props => props.theme.colors.white}; */
        }
    }

    @media screen and (min-width: 768px) {
        width: 38.5px;
        height: 34px;
    }
`;
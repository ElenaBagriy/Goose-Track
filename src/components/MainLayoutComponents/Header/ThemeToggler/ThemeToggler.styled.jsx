import styled from 'styled-components';

export const TogglerButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    fill: ${props => props.theme.colors.mainBlue};
    transition: fill ${props => props.theme.hover.transition}, scale ${props => props.theme.hover.transition};

    &:hover,
    &:focus {
        fill: ${props => props.theme.button.hover};
        scale: 1.1;
    }

    & svg {
        width: 24px;
        height: 24px;

        @media screen and (min-width: 768px) {
            width: 32px;
            height: 32px;
        }
    }
`;



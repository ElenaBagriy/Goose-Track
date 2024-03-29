import styled from 'styled-components';
import { keyframes } from 'styled-components';

const flipVerticalLeft =  keyframes`
    0% {
        -webkit-transform:rotateY(0);
        transform:rotateY(0)
    }

    25% {
        -webkit-transform:rotateY(-90deg);
        transform:rotateY(-90deg)
    }

    50% {
        -webkit-transform:rotateY(-180deg);
        transform:rotateY(-180deg)
    }

    75% {
        -webkit-transform:rotateY(-270deg);
        transform:rotateY(-270deg)
    }

    100% {
        -webkit-transform:rotateY(-360deg);
        transform:rotateY(-360deg)
    }
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    width: 131px;
    height: 46px;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.mainBlue};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    border: none;
    color: #FFF;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.29; 
    letter-spacing: -0.28px;
    transition: background-color ${props => props.theme.hover.transition};

    @media screen and (min-width: 768px) {
        width: 141px;
        height: 56px;
        gap: 11px;
        font-size: 18px;
        line-height: 1.33; 
        letter-spacing: -0.36px;
    }

    &:hover,
    &:focus {
        background-color: ${props => props.theme.button.hover};

        & svg {
            -webkit-animation: ${flipVerticalLeft} 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) alternate forwards;
	        animation: ${flipVerticalLeft} 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) alternate forwards;
        }
    }
`
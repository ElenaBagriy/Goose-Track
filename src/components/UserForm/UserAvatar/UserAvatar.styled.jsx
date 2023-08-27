import styled from 'styled-components';
import { keyframes } from 'styled-components';


const rotate =  keyframes`
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;

export const AvatarLabel = styled.label`
    position: absolute;
    top: -90px;
    left: 50%;
    transform: translateX(-50%);
    width: 72px;
    height: 72px;
    transition: border-color ${props => props.theme.hover.transition};

    @media screen and (min-width: 768px) {
        width: 124px;
        height: 124px;
        top: -144px;
    }

    &:hover,
    &:focus {
        border-color: ${props => props.theme.button.hover};

        & div.add-button {
            background-color: ${props => props.theme.button.hover};
            box-shadow: ${props => props.theme.button.boxShadow};
        }

        & svg {
            animation: ${rotate} 0.6s ease-in-out both;
        }
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.mainBlue};
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${props => props.theme.colors.avatarBg};

    @media screen and (min-width: 768px) {
        width: 124px;
        height: 124px;
    }
`

export const AddButton = styled.div`
    position: absolute;
    right: 15px;
    bottom: -4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.mainBlue};
    border-radius: 50%;
    width: 14px;
    height: 14px;
    cursor: pointer;
    transition: background-color ${props => props.theme.hover.transition}, box-shadow ${props => props.theme.hover.transition};

    & svg {
        width: 8px;
        height: 8px;
    }

    @media screen and (min-width: 768px) {
        width: 24px;
        height: 24px;
        right: 24px;
        bottom: -6px;

        & svg {
            width: 18px;
            height: 18px;
        }
    }
`;

export const HiddenInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 0;
    opacity: 0;
    cursor: pointer;
`;

export const Error = styled.span`
    position: absolute;
    width: auto;
    color: ${props => props.theme.colors.error};
    bottom: 50%;
    left: calc(100% + 10px);
    transform: translateY(50%);
    font-family: Inter;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.17;

    @media screen and (min-width: 768px) {
        font-size: 12px;
    }
`;

export const AvatarImage = styled.img`
  overflow: hidden;
  object-fit: cover;
  display: block;
  height: 100%;
  width: 100%;
`;

export const CoverImage = styled.img`
    width: 28px;
    height: 28px;
  object-fit: fill;


    @media screen and (min-width: 768px) {
        width: 48px;
        height: 48px;
    }
`
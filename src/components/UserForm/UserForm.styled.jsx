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
`

export const Form = styled.form`
    display: inline-flex;
    padding: 59px 18px 40px 18px;
    width: 100%;
    margin-bottom: 40px;
    margin-top: 95px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.page};

    @media screen and (min-width: 768px) {
        padding-top: 184px;
        margin-bottom: 38px;
        margin-top: 77px;
    }

    @media screen and (min-width: 1400px) {
        padding-top: 204px;
        padding-bottom: 60px;
        gap: 44px;
    }
`;

export const UserAvatarWrapper = styled.div`
    position: relative;
`;

export const AvatarLabel = styled.label`
    position: absolute;
    top: -90px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.colors.mainBlue};
    background-repeat: no-repeat;
    background-size: cover;
    background-color: ${props => props.theme.colors.avatarBg};
    transition: border-color ${props => props.theme.hover.transition};


    & img {
        width: 28px;
        height: 28px;
    }

    @media screen and (min-width: 768px) {
        width: 124px;
        height: 124px;
        top: -144px;

        & img {
            width: 48px;
            height: 48px;
        }
    }

    &:hover,
    &:focus {
        border-color: ${props => props.theme.button.hover};

        & div {
            background-color: ${props => props.theme.button.hover};
            box-shadow: ${props => props.theme.button.boxShadow};
        }

        & svg {
            animation: ${rotate} 0.6s ease-in-out both;
        }
    }
`;

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

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin: 0 auto;

    @media screen and (min-width: 1400px) {
        gap: 88px;
    }
`;

export const FieldsWrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    row-gap: 18px;
    margin: 0 auto;

    @media screen and (min-width: 768px) {
        row-gap: 24px;
    }

    @media screen and (min-width: 1400px) {
        flex-direction: row;
        flex-wrap: wrap;
        column-gap: 50px;
        width: 758px;
    }
`;

export const NameWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    @media screen and (min-width: 768px) {
        gap: 8px;
    }
`;

export const Name = styled.p`
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.29;
    color: ${props => props.theme.text.header};

    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 1;
    }
`;

export const Role = styled.p`
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.17;
    color: ${props => props.theme.text.role};

    @media screen and (min-width: 768px) {
        font-size: 14px;
        line-height: 1.29;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.17;
    width: 299px;
    color: ${props => props.theme.text.label};

    @media screen and (min-width: 768px) {
        width: 354px;
    }
`;

export const StyledField = styled.input`
    padding: 12px 14px;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.29;
    color: ${props => props.theme.text.input};
    background-color: transparent;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.inputBorder};

    &::placeholder {
        opacity: 1;
    }

    @media screen and (min-width: 768px) {
        padding: 14px 18px;
    }
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 195px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 16px;
    background-color: ${props => props.theme.colors.mainBlue};
    border: none;
    color: ${props => props.theme.colors.white};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.29; 
    transition: background-color ${props => props.theme.hover.transition}, box-shadow ${props => props.theme.hover.transition};

    @media screen and (min-width: 768px) {
        width: 262px;
    }

    &:hover,
    &:focus {
        background-color: ${props => props.theme.button.hover};
        box-shadow: ${props => props.theme.button.boxShadow};
    }

    &:disabled {
        background-color: ${props => props.theme.button.disabled};
        box-shadow: none;

    }
`;
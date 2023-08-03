import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
    width: 335px;
    padding: 40px 24px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.white};

    @media screen and (min-width: 768px) {
        padding: 40px;
        width: 480px;
    }
`;

export const Title = styled.h1`
    margin-bottom: 32px;
    color: ${props => props.theme.colors.mainBlue};
    text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07);
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.33;

    @media screen and (min-width: 768px) {
        margin-bottom: 40px;
        font-size: 24px;
        line-height: 1;
    }
`;

export const Label = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 287px;
    font-family: Inter;
    font-size: 12px;
    font-weight: 600;
    line-height: normal;
    color: ${props => {
        if (props.error && props.touched) {
            return props.theme.colors.error;
        } else if (!props.error && props.touched) {
            return props.theme.colors.success;
        } 
            return '#111';
    }};

    &:not(:last-child) {
        margin-bottom: 24px;
    }

    @media screen and (min-width: 768px) {
        font-size: 14px;
        width: 400px;
        &:not(:last-child) {
            margin-bottom: 18px;
        }
    }
`;

export const StyledField = styled(Field)`
    height: 46px;
    border-radius: 8px;
    padding: 14px;
    color: #111;
    font-family: Inter;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.29;  
    transition: border ${props => props.theme.hover.transition};
    border: 1px solid ${props => {
        if (props.error && props.touched) {
            return props.theme.colors.error;
        } else if (!props.error && props.touched) {
            return props.theme.colors.success;
        } 
            return 'rgba(220, 227, 229, 0.60)';
    }};

    @media screen and (min-width: 768px) {
        padding: 18px;
        height: 54px;
        font-size: 16px;
        line-height: 1.13;  
    }

    &::placeholder {
        color: #DCE3E5;
    }

    &:hover,
    &:focus,
    &:focus-visible {
        border: 1px solid #111;
        outline: none;
    }
`;

export const SubmitButton = styled.button`
    margin: 0 auto;
    margin-top: 32px;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 11px;
    padding-top: 14px;
    padding-bottom: 14px;
    border-radius: 16px;
    border: none;
    background-color: ${props => props.theme.colors.mainBlue};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    color: #FFF;
    font-family: Inter;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;
    letter-spacing: -0.0175rem;
    transition: background-color ${props => props.theme.hover.transition};

    @media screen and (min-width: 768px) {
        margin-top: 48px;
        font-size: 18px;
        line-height: 1.33;
        letter-spacing: -0.0225rem;
        padding-top: 16px;
        padding-bottom: 16px;

        & svg {
            width: 20px;
            height: 20px;
        }
    }

    &:hover,
    &:focus {
        background-color: ${props => props.theme.button.hover};
    }

    & svg{
        stroke: ${(props) => props.theme.colors.white};
    }
`;

export const Error = styled.span`
    position: absolute;
    color: ${props => props.theme.colors.error};
    top: 100%;
    left: 14px;
    font-family: Inter;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.17;

    @media screen and (min-width: 768px) {
        left: 18px;
        font-size: 12px;
    }
`;

export const VisibilityBtn = styled.button`
      position: absolute;
      width: 24px;
      height: 24px;
      right: 18px;
      bottom: 11px;
      background: transparent;
      border: none;

      @media screen and (min-width: 768px) {
        bottom: 15px;
      }

      &:hover,
      &:focus {
        & .MuiSvgIcon-root {
            scale: 1.1;
        }
      };
      
      & .MuiSvgIcon-root {
        transition: scale ${props => props.theme.hover.transition};
        color: ${props => {
            if (props.error && props.touched) {
                return props.theme.colors.error;
            } else if (!props.error && props.touched) {
                return props.theme.colors.success;
            } 
            return props.theme.colors.mainBlue;
        }};
        }
`;

export const SVG = styled.svg`
    position: absolute;
    right: 18px;
    bottom: 11px; 

    @media screen and (min-width: 768px) {
        bottom: 15px; 
    }
`;
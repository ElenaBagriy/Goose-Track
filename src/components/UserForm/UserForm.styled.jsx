import styled from 'styled-components';

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
    position: relative;
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
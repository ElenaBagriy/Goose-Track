import styled from 'styled-components';

export const Section = styled.main`
    padding: 64px 20px;

    @media screen and (min-width: 768px) {
        padding: 64px 32px;
    }

    @media screen and (min-width: 1400px) {
        padding: 64px 128px 100px 128px;
    }
`;

export const DescriptionList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 64px;
`;

export const DescriptionItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media screen and (min-width: 768px) {
        gap: 48px;

        &:nth-child(2n){
            & div:nth-of-type(1) {
                margin-left: auto;
            }
        }
    }

    @media screen and (min-width: 1400px) {
        flex-direction: row;
        align-items: center;
        gap: 228px;

        &:nth-child(2n){
            flex-direction: row-reverse;
            justify-content: flex-end;
            & div:nth-of-type(1) {
                margin-left: 0;
            }
        }

        &:nth-child(2n+1){
            justify-content: end;
        }
    }
`;

export const Number = styled.span`
    display: block;
    margin-bottom: 14px;
    color: ${(props) => props.theme.colors.mainBlue};
    font-family: Inter;
    font-size: 80px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.25rem;

    @media screen and (min-width: 768px) {
        font-size: 104px;
    }
`;

export const Title = styled.h2`
    margin-bottom: 14px;
    color: ${(props) => props.theme.colors.black};
    font-family: Inter;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.25;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        margin-bottom: 24px;
        text-shadow: 0px 9.399999618530273px 57.6875px 0px rgba(0, 0, 0, 0.04), 0px 47px 355px 0px rgba(0, 0, 0, 0.07);
        font-size: 40px;
        line-height: 1.1;
    }

`;

export const AccentTitle = styled.span`
    display: inline-block;
    align-items: center;
    padding: 8px 18px;
    margin-bottom: 8px;
    border-radius: 44px;
    background-color: ${(props) => props.theme.colors.lightBlue};
    color: ${(props) => props.theme.colors.mainBlue};

    @media screen and (min-width: 768px) {
       padding: 6px 18px;
    }
`;

export const Text = styled.p`
    color: rgba(17, 17, 17, 0.90);
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;  

    @media screen and (min-width: 768px) {
        width: 275px;
    }
`;


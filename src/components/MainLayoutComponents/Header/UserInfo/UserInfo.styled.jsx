import styled from 'styled-components';

export const Name = styled.p`
    color: ${props => props.theme.text.header};
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 1.29;

    @media screen and (min-width: 768px) {
        font-size: 18px;
        line-height: 1;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 1.8px solid ${props => props.theme.colors.mainBlue};;
    background: lightgray 50% / cover no-repeat;
    font-family: Inter;
    font-size: 17px;
    font-weight: 700;
    color: ${props => props.theme.colors.mainBlue};

    @media screen and (min-width: 768px) {
        width: 44px;
        height: 44px;
    }

    & img {
        object-fit: cover;
        display: block;
        height: 100%;
        width: 100%;
    }
`;


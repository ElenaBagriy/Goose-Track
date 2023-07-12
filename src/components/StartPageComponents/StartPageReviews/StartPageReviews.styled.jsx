import styled from 'styled-components';

export const Section = styled.section`
    padding: 0px 20px 64px ;

    @media screen and (min-width: 768px) {
        padding: 0px 32px 100px;
    }

    @media screen and (min-width: 1400px) {
        padding: 0px 128px 118px;
    }
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 40px;
    color: ${(props) => props.theme.colors.mainBlue};
    font-family: Inter;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.14;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
        margin-bottom: 50px;
        font-size: 40px;
        line-height: 1.1;
    }
`
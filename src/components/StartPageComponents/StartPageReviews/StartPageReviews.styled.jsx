import styled from 'styled-components';

export const Section = styled.section`
    padding: 0px 20px 64px ;

    @media screen and (min-width: 768px) {
        padding: 0px 32px 100px;
    }

    @media screen and (min-width: 1400px) {
        padding: 0px 30px 128px 118px;
    }

    & .slick-list {
        margin: 0 auto;
        @media screen and (min-width: 1400px) {
            width: 1208px;
        }
    }

    & .MuiAvatar-root.MuiAvatar-circular {
        background-color: ${(props) => props.theme.colors.mainBlue};
        width: 50px;
        height: 50px;
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
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0 auto;

    padding: 24px 20px 24px 24px;
    border-radius: 8px;
    border: 1px solid rgba(17, 17, 17, 0.10);  
    
    @media screen and (min-width: 768px) {
        width: 580px;
        height: 247px;
        padding: 32px;
    }
    
    @media screen and (max-width: 1400px) {
        margin: 0 auto;

    }
`;

export const Name = styled.h3`
    margin-bottom: 13px;
    font-family: Inter;
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    color: #343434;
`;

export const Comment = styled.p`
    font-family: Inter;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    color: rgba(17, 17, 17, 0.70);
    @media screen and (min-width: 768px) {
        width: 447px;
        margin-left: auto;
    }
`;

export const PrevArrowButton = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(100% + 8px);
    right: calc(50% + 12.5px);
`;

export const NextArrowButton = styled.button`
    background-color: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: calc(100% + 8px);
    left: calc(50% + 12.5px);
`;

export const SVG = styled.svg`
    width: 50px;
    height: 50px;
    fill: #111111;
    transition: fill ${props => props.theme.hover.transition};

    &:hover,
    &:focus {
        fill: ${props => props.theme.colors.mainBlue}
    }

    @media screen and (min-width: 768px) {
        width: 61px;
        height: 61px;
    }
`;

export const UserBox = styled.div`
    display: flex;
    gap: 18px;
`;

export const Rate = styled.div`
    display: flex;
    gap: 10px;

    & svg {
        /* fill: #FFAC33; */
    }
`

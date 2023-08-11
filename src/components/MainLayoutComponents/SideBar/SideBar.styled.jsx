import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.sidebar};
    width: 225px;
    min-height: 100vh;
    padding: 24px 20px;

    @media screen and (min-width: 768px) {
        width: 289px;
        padding: 24px 32px;
    }

    @media screen and (min-width: 1400px) {
        padding: 32px 24px 24px 24px;
    }
`;

export const CloseButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    
    &:hover,
    &:focus {
      & svg {
         stroke: ${props => props.theme.colors.mainBlue};
      }
    }

    & svg {
        width: 24px;
        height: 24px;
        stroke: ${props => props.theme.text.header};
        transition: stroke ${props => props.theme.hover.transition};

        @media screen and (min-width: 768px) {
            width: 34px;
            height: 34px;
        }
    }
`;

export const LogoWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 64px;
    justify-content: space-between;

    @media screen and (min-width: 1400px) {
        margin-bottom: 50px;
    }

    @media screen and (min-width: 1400px) {
        margin-bottom: 32px;
    }
`;
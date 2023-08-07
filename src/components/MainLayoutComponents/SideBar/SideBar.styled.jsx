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
`
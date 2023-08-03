import styled from 'styled-components';

export const Section = styled.section`
    background-color: ${props => props.theme.colors.lightBlue};
    height: 100vh;
    padding: 20px;
`;

export const FormWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
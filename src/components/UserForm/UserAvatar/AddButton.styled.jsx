import { SpeedDial } from '@mui/material';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate =  keyframes`
    0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
    }
    100% {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }
`;

export const StyledSpeedDial = styled(SpeedDial)`
    position: absolute;
    left: 43px;
    bottom: -4px;
    height: 14px;


    @media screen and (min-width: 768px) {
        left: 76px;
        bottom: -6px;
        height: 24px;

    }

    & button.MuiSpeedDial-fab {
        min-height: auto;
        width: 14px;
        height: 14px;
        background-color: ${props => props.theme.colors.mainBlue};

    @media screen and (min-width: 768px) {
        width: 24px;
        height: 24px;
    }

        & svg {
            width: 8px;
            height: 8px;

          @media screen and (min-width: 768px) {
            width: 18px;
            height: 18px;
          }
        }
    }

`;

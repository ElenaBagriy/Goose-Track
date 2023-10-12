import { SpeedDial } from '@mui/material';
import styled from 'styled-components';

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

    & div.MuiSpeedDial-actions {
    @media screen and (max-width: 768px) {
        margin-left: -40px;
    }
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

    & button.MuiSpeedDialAction-fab {
        min-height: auto;
        width: 14px;
        height: 14px;

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

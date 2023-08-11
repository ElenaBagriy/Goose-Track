import { Dialog, Modal } from '@mui/material';
import styled from 'styled-components';

export const StyledModal = styled(Modal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  transition: scale ${props => props.theme.hover.transition};
`;

export const StyledDialog = styled(Dialog)`
  & .MuiDialogContent-root {
    padding: 0;
  }

  & .MuiPaper-root {
    margin: 0;
    max-width: fit-content;
    background-color: transparent;
    border-radius: 0;
  }

  & .MuiDialog-container {
    display: block;
    height: auto;
  }
`;

export const OpenButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;

    &:hover,
    &:focus {
      & svg {
         stroke: ${props => props.theme.colors.mainBlue};
      }
    }

    & svg {
      stroke: ${props => props.theme.text.header};
      transition: stroke ${props => props.theme.hover.transition};
    }

    @media screen and (min-width: 768px) {
      & svg {
      width: 34px;
      height: 34px;
    }
    }
`;
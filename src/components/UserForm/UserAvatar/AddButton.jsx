import * as React from 'react';
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import sprite from '../../../images/svg/sprite.svg';
import { ButtonWrapper, StyledSpeedDial } from './AddButton.styled';


const actions = [
    { icon: <UploadIcon />, name: 'Upload' },
    { icon: <DeleteIcon />, name: 'Delete' },
  ];

export const PlaygroundSpeedDial = (onChange) => {

  return (
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<svg width={18} height={18} className='addIcon'>
            <use href={sprite + '#plus'}></use>
            </svg>}
          direction='right'
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              // onClick={onChange}
            />
          ))}
        </StyledSpeedDial>
  );
}
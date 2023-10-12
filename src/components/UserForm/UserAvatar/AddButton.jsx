import * as React from 'react';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadIcon from '@mui/icons-material/Upload';
import sprite from '../../../images/svg/sprite.svg';
import { StyledSpeedDial } from './AddButton.styled';
import { useState } from 'react';

export const SpeedDial = ({onAddImage, onDelete, userImage}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    if (userImage){
    setOpen(true)}
    return;
  };
  const handleClose = () => setOpen(false);

  
  const onClick = () => {
    if (!userImage) {
      onAddImage()
    }
  };

  return (
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          icon={<svg width={18} height={18} className='addIcon'>
            <use href={sprite + '#plus'}></use>
            </svg>}
          direction='right'
          onClick={onClick}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
            <SpeedDialAction
              icon={<UploadIcon />}
              tooltipTitle='Upload'
              onClick={() => {
                onAddImage();
                handleClose();
              }}
            />
            <SpeedDialAction
              icon={<DeleteIcon />}
              tooltipTitle='Delete'
              onClick={() => {
                onDelete();
                handleClose();
              }}
            />
        </StyledSpeedDial>
  );
}
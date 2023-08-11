import { DialogContent, Slide, useMediaQuery } from "@mui/material";
import React from "react";
import { SideBar } from "../SideBar/SideBar";
import { OpenButton, StyledDialog } from "./BurgerMenu.styled";
import sprite from '../../../images/svg/sprite.svg'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
  });
  
export const BurgerMenu = ({isOpen, handleOpen, handleClose}) => {
    const ref = React.createRef();
    const isMobile = useMediaQuery('(max-width: 1279px)');

    return <>
    <OpenButton onClick={handleOpen}>
        <svg width={24} height={24}>
            <use href={sprite + '#menu'}></use>
        </svg>
    </OpenButton>
    <StyledDialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>

        </DialogContent>
        <Slide direction="right" in={isOpen}>
            <SideBar ismobile={isMobile} handleClose={handleClose} ref={ref}/>
        </Slide>
      </StyledDialog>
    </>
}
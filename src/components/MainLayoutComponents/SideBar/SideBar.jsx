import React from "react";
import { LogoutButton } from "./LogoutButton/LogoutButton";
import { CloseButton, LogoWrapper, Section } from "./SideBar.styled";
import { UserNav } from "./UserNav/UserNav";
import { useMediaQuery } from "@mui/material";
import sprite from '../../../images/svg/sprite.svg';
import { Logo } from "./Logo/Logo";

export const SideBar = React.forwardRef(function({handleClose}, ref) {
    const isMobile = useMediaQuery('(max-width: 1279px)');
    
    return <Section ref={ref}>
        <div>
            <LogoWrapper>
                <Logo/>
                {isMobile &&
                <CloseButton onClick={handleClose}>
                    <svg width={24} height={24}>
                        <use href={sprite + '#close'}></use>
                    </svg>
                </CloseButton>
                }
            </LogoWrapper>
            <UserNav/>
        </div>
        <LogoutButton/>
    </Section>
})
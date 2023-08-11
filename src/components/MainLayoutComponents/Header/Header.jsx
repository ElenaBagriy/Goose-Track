import { onCapitalise } from "shared/services/onCapitalise";
import { ThemeToggler } from "./ThemeToggler/ThemeToggler"
import { UserInfo } from "./UserInfo/UserInfo"
import { useLocation } from "react-router-dom";
import { Box, HeaderStyled, Title, Wrapper } from "./Header.styled";
import { FeedbackButton } from "./FeedbackButton/FeedbackButton";
import { useMediaQuery } from "@mui/material";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";

export const Header = ({isOpen, handleOpen, handleClose}) => {
    const { pathname } = useLocation();
    const isMobile = useMediaQuery('(max-width: 1399px)');

    let title = '';

    if (pathname !== '/account') {
        title = onCapitalise(pathname.slice(1, pathname.length));
    } else {
        title = 'User Profile'
    };

    return <HeaderStyled>
        {isMobile && <BurgerMenu isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose}/> }
        <Title>{title}</Title>
        <Wrapper>
            <FeedbackButton/>
            <Box>
                <ThemeToggler/>
                <UserInfo/>
            </Box>
        </Wrapper>
    </HeaderStyled>
}
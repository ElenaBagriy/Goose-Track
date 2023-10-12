import { onCapitalise } from "shared/services/onCapitalise";
import { ThemeToggler } from "./ThemeToggler/ThemeToggler"
import { UserInfo } from "./UserInfo/UserInfo"
import { useLocation } from "react-router-dom";
import { Box, Goose, HeaderStyled, Motivation, MotivationWrapper, Title, TitleWithMotivationWrapper, Wrapper } from "./Header.styled";
import { FeedbackButton } from "./FeedbackButton/FeedbackButton";
import { useMediaQuery } from "@mui/material";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { useSelector } from "react-redux";
import { selectTasks } from "redux/selectors";

export const Header = ({isOpen, handleOpen, handleClose}) => {
    const { pathname } = useLocation();
    const isMobile = useMediaQuery('(max-width: 1399px)');
    const tasks = useSelector(selectTasks);

    console.log(tasks);


    let title = '';

    if (pathname !== '/account') {
        title = onCapitalise(pathname.slice(1, pathname.length));
    } else {
        title = 'User Profile'
    };

    return <HeaderStyled>
        {isMobile && <BurgerMenu isOpen={isOpen} handleOpen={handleOpen} handleClose={handleClose}/> }
        {tasks && title === 'Calendar' ? 
        <TitleWithMotivationWrapper>
            <Goose/>
            <MotivationWrapper>
                <Title>{title}</Title>
                <Motivation><span>Let's go</span> of the past and focus on the present!</Motivation> 
            </MotivationWrapper>
        </TitleWithMotivationWrapper> 
        : <Title>{title}</Title> }
        <Wrapper>
            <FeedbackButton/>
            <Box>
                <ThemeToggler/>
                <UserInfo/>
            </Box>
        </Wrapper>
    </HeaderStyled>
}
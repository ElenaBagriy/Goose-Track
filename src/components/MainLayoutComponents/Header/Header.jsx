import { onCapitalise } from "shared/services/onCapitalise";
import { ThemeToggler } from "./ThemeToggler/ThemeToggler"
import { UserInfo } from "./UserInfo/UserInfo"
import { useLocation } from "react-router-dom";
import { Box, HeaderStyled, Title, Wrapper } from "./Header.styled";
import { FeedbackButton } from "./FeedbackButton/FeedbackButton";

export const Header = () => {
    const { pathname } = useLocation();
    let title = '';

    if (pathname !== '/account') {
        title = onCapitalise(pathname.slice(1, pathname.length));
    } else {
        title = 'User Profile'
    };

    return <HeaderStyled>
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
import { onCapitalise } from "shared/services/onCapitalise";
import { ThemeToggler } from "./ThemeToggler/ThemeToggler"
import { UserInfo } from "./UserInfo/UserInfo"
import { useLocation } from "react-router-dom";
import { HeaderStyled, Title } from "./Header.styled";

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
    <ThemeToggler/>
    <UserInfo/>
    </HeaderStyled>
}
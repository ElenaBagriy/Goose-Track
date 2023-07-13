import { Header, Image, LoginButton, Nav, SignupButton, Title } from "./StartPageHero.styled";
import sprite from '../../../images/svg/sprite.svg';
import { ROUTES } from "shared/services/routes";

export const StartPageHero = () => {
    return <Header>
        <Image/>
        <Title>Go<span>o</span>seTrack</Title>
        <Nav>
            <SignupButton to={ROUTES.register}>Sign up</SignupButton>
            <LoginButton to={ROUTES.login}>Log in
                <svg height="18" width="18">
                    <use href={sprite + '#login'}></use>
              </svg>
            </LoginButton>
        </Nav>
    </Header>
}
import { Header, Image, LoginButton, Nav, SignupButton, Title } from "./StartPageHero.styled";
import sprite from '../../../images/svg/sprite.svg';

export const StartPageHero = () => {
    return <Header>
        <Image/>
        <Title>Go<span>o</span>seTrack</Title>
        <Nav>
            <SignupButton>Sign up</SignupButton>
            <LoginButton>Log in
                <svg height="18" width="18">
                    <use href={sprite + '#login'}></use>
              </svg>
            </LoginButton>
        </Nav>
    </Header>
}
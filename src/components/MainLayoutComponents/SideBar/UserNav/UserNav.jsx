import { Link, Nav, Title } from "./UserNav.styled";
import sprite from '../../../../images/svg/sprite.svg';

export const UserNav = () => {
    return <div>
        <Title>User Panel</Title>
        <Nav>
            <Link to='/account'>
                <svg width={24} height={24}>
                    <use href={sprite + '#user'}></use>
                </svg>
                My account
            </Link>
            <Link to='/calendar'>
                <svg width={24} height={24}>
                    <use href={sprite + '#calendar'}></use>
                </svg>
                Calendar</Link>
            <Link to='/statistics'>
                <svg width={24} height={24}>
                    <use href={sprite + '#statistic'}></use>
                </svg>
                Statistics</Link>
        </Nav>
    </div>
}
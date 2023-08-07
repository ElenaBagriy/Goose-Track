import { Logo } from "../Logo/Logo";
import { Link, Nav, Title } from "./UserNav.styled";


export const UserNav = () => {
    return <div>
        <Logo/>
        <Title>User Panel</Title>
        <Nav>
            <Link to='/account'>My account</Link>
            <Link to='/calendar'>Calendar</Link>
            <Link to='/statistics'>Statistics</Link>
        </Nav>
    </div>
}
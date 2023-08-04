import { NavLink } from "react-router-dom"

export const UserNav = () => {
    return <div>
    <NavLink to='/account}'>My account</NavLink>
    <NavLink to='/calendar}'>Calendar</NavLink>
    <NavLink to='/statistics}'>Statistics</NavLink>
    </div>
}
import { LogoutButton } from "./LogoutButton/LogoutButton"
import { Section } from "./SideBar.styled"
import { UserNav } from "./UserNav/UserNav"

export const SideBar = () => {
    return <Section>
    <UserNav/>
    <LogoutButton/>
    </Section>
}
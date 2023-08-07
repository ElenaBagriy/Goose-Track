import { SideBar } from "components/MainLayoutComponents/SideBar/SideBar";
import { Header } from "components/MainLayoutComponents/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "shared/services/reusableComponents/Container/Container";
import { Background } from "./MainLayout.styled";

const MainLayout = () => {
    return <Background>
            <SideBar/>
        <Container>
            <Header/>
            <Suspense>
                <Outlet />
            </Suspense>
        </Container>
    </Background>;
};

export default MainLayout;
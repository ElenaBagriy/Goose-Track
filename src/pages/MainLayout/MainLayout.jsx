import { SideBar } from "components/MainLayoutComponents/SideBar/SideBar";
import { Header } from "components/MainLayoutComponents/Header/Header";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return <>
        <Header/>
        <SideBar/>
        <Suspense>
            <Outlet />
        </Suspense>
    </>;
};

export default MainLayout;
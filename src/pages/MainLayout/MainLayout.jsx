import { SideBar } from "components/MainLayoutComponents/SideBar/SideBar";
import { Header } from "components/MainLayoutComponents/Header/Header";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "shared/services/reusableComponents/Container/Container";
import { Background } from "./MainLayout.styled";
import { useMediaQuery } from "@mui/material";

const MainLayout = () => {
    const isMobile = useMediaQuery('(max-width: 1399px)');
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <Background>
        {!isMobile && <SideBar handleClose={handleClose}/> }
        <Container>
            <Header isOpen={open} handleOpen={handleOpen} handleClose={handleClose}/>
            <Suspense>
                <Outlet />
            </Suspense>
        </Container>
    </Background>;
};

export default MainLayout;
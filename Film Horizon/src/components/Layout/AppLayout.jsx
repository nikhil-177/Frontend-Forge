import { Outlet } from "react-router-dom"
import { Footer } from "../UI/Footer/Footer"
import { Header } from "../UI/Header/header"

export const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
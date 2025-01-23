import { Outlet } from "react-router-dom"
import Navbar from "../Components/navbar"


const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout
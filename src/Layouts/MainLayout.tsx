import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


const MainLayout = () => {
    const location = useLocation()
    const noFooterPath = ["/login"]
    const showFooter = !noFooterPath.includes(location.pathname)
    return (
        <>
            <Navbar />
            <Outlet />
            {showFooter && <Footer />}

        </>
    )
}

export default MainLayout
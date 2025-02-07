import { NavLink, useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"
import { useState } from "react"
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const navigate = useNavigate()

    const [token, setToken] = useState(true);
    const [menu, setMenu] = useState(false);

    return (
        <nav className="bg-zinc-800 h-20 w-full flex justify-between items-center text-gray-300 px-8 md:px-12 py-2 border-b border-gray-700">
            <NavLink className="z-50" to={"/"}>
                <img className="w-32 z-50" src={assets.logo} alt="image" />
            </NavLink>
            <ul className="hidden md:flex gap-8">
                {
                    ["HOME", "BOOKING", "ABOUT US"].map((item, index) => (
                        <li key={index}><NavLink className={({ isActive }) => ` ${isActive ? "text-amber-500 text-sm font-bold" : "text-gray-300 text-sm font-semibold"}`} to={index === 0 ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}>{item}</NavLink> <hr className="hidden" /></li>
                    ))
                }
            </ul>
            <div className="flex items-center gap-4">
                {
                    token
                        ? <div className="flex relative items-center gap-2 group">
                            <img className="w-8 rounded-full" src={assets.profile_pic} alt="image" />
                            <FaChevronDown className="w-2.5 text-white" />
                            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 hidden group-hover:block z-20">
                                <div className="min-w-48 bg-stone-100 flex flex-col gap-4 p-4 rounded">
                                    <p className="hover:text-black cursor-pointer" onClick={() => navigate("/profile")}>Profile</p>
                                    <p className="hover:text-black cursor-pointer" onClick={() => navigate("/appointment")}>Appointment</p>
                                    <p className="hover:text-black cursor-pointer" onClick={() => setToken(false)}>Log Out</p>
                                </div>
                            </div>
                        </div>
                        : <button onClick={() => navigate("/login")} className="border border-gray-200 px-6 py-2 text-sm hover:bg-white hover:text-black transition-all duration-300">Create Account</button>
                }

            </div>
            <div className="z-50 md:hidden" onClick={() => setMenu(prev => !prev)}>
                {menu ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={menu ? "absolute flex flex-col md:hidden top-0 right-0 items-center text-center justify-center gap-8 h-screen w-full bg-black z-20" : "hidden"}>
                {
                    ["HOME", "BOOkING", "ABOUT US"].map((item, index) => (
                        <li key={index}><NavLink onClick={() => setMenu(prev => !prev)} className={({ isActive }) => ` ${isActive ? "text-green-700 text-sm font-bold" : "text-gray-300 text-sm font-semibold"}`} to={index === 0 ? "/" : `/${item.toLowerCase().replace(" ", "-")}`}>{item}</NavLink> <hr className="hidden" /></li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar
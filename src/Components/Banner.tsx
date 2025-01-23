import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const Banner = () => {
    return (
        <section className="bg-zinc-800">
            <div className="container-xl md:container px-5 md:px-10 m-auto ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <img src={assets.about} className="w-full" alt="" />
                    <div className="flex flex-col gap-5">
                        <p className="text-6xl text-yellow-700 font-extrabold"><span className="text-white">SERVICE</span> BEYOND <br /> EXPECTATION</p>
                        <hr />
                        <p>Our barbershop is the territory created for men
                            <br /> who appreciate high quality, impeccable services
                            <br />and the perfect look. Welcome to the BarberPlace</p>

                            <Link to={"/about-us"} className="inline-block px-8 py-3 border-2 border-yellow-800 text-white font-bold">Read More About Us</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
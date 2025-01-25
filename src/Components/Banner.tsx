import { Link } from "react-router-dom"
import { assets } from "../assets/assets"

const Banner = () => {
    return (
        <section className="bg-zinc-800">
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 px-10 rounded-lg">
                    <div className="md:relative overflow-hidden">
                        <img src={assets.about} className="w-full absolute top-0 bottom-0 " alt="" />
                    </div>
                    <div className=" md:flex-1 p-10 ">
                        <p className="text-2xl md:text-4xl lg:text-6xl text-yellow-700 font-extrabold"><span className="text-white">SERVICE</span> BEYOND <br /> EXPECTATION</p>
                        <hr className="w-24 my-10" />
                        <p className="text-neutral-400 text-xm md:text-lg mb-10 leading-8">Our barbershop is the territory created for men
                            <br /> who appreciate high quality, impeccable services
                            <br />and the perfect look. Welcome to the BarberPlace</p>

                        <Link to={"/about-us"} className=" px-8 py-3 border-4 border-yellow-800 text-white font-bold">Read More About Us</Link>
                    </div>
                </div>
            
        </section>
    )
}

export default Banner
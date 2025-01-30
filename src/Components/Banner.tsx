import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Banner = () => {
    const navigate = useNavigate();
    return (
        <section className="bg-zinc-800 flex justify-center items-center pb-20">
            <div className="md:container container-xl grid grid-cols-1 md:grid-cols-60/40 gap-5 px-10 md:px-16 py-10 my-10 mx-auto">
                <div className="-mb-5 md:block hidden relative overflow-hidden">
                    <img src={assets.about} alt="image" className="w-full absolute bottom-0 top-0" />
                </div>
                <div className="">
                    <p className="text-yellow-700 text-4xl md:text-3xl lg:text-5xl"><span className="text-white">
                        SERVICE</span> BEYOND<br /> EXPECTATION</p>
                    <hr className="border-gray-600 w-16  my-8" />
                    <p className="mb-10 text-neutral-500 leading-5 md:text-[10px] lg:text-base">Our BarberShop is the territory created for men <br /> who appreciate high quality, impeccable service,<br /> and the perfect look. Welcome to the BarberPlace</p>
                    <button onClick={() => {navigate("about-us"); scrollTo(0,0)}} className="border-4 border-yellow-700 text-sm text-white font-bold px-8 py-4 mt-5">More on US</button>
                </div>
            </div>

        </section>
    )
}

export default Banner
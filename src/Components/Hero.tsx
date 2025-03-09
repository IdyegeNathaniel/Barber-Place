import { useNavigate } from "react-router-dom";
import bgImage from "/banner.jpg"


const Hero: React.FC = () => {

    const navigate = useNavigate();
    const backGround = {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
    return (
        <section className="w-full py-20 rounded" style={backGround}>
            <div className="container px-4 sm:px-6 lg:px-8 flex flex-col items-start text-black mx-auto gap-3">
                <p className="text-yellow-700 text-4xl md:text-6xl font-extrabold">FEEL YOUR NEW </p>
                <p className="text-white text-4xl md:text-6xl font-bold"> STYLE</p>
                <hr className="w-1/6 h-0.5 my-5" />
                <p className="text-sm md:text-lg text-white leading-3 font-extralight">Come by for a clean haircut, shave <br className="hidden md:fles" />and feel like a gentleman.</p>
                <button onClick={() => { navigate("/booking"); scrollTo(0, 0) }} className="border-2 border-yellow-700 text-xl text-white font-bold px-8 py-4 mt-5 hover:bg-yellow-700 transition-all duration-500">Book an appointment</button>
            </div>

        </section>
    )
}

export default Hero
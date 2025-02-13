import { services } from "../assets/assets"

const Services: React.FC = () => {
    return (
        <section className="bg-zinc-800 py-20">
            <div className="container-xl md:container px-5 md:px-10 m-auto items-center justify-center text-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 p-4 rounded-lg text-center">
                {
                    services.map((service, index) => (
                        <div className="flex flex-col gap-4 items-center bg-stone-700 p-8 rounded-lg shadow-md md:hover:-translate-y-8 transition-all duration-500" key={index}>
                            <img src={service.image} className="w-14 md:w-16" alt="image" />
                            <p className="text-white text-xl font-bold">{service.type}</p>
                            <p className="text-gray-400 text-[4px] md:text-xs font-light">{service.service}</p>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    )
}

export default Services;
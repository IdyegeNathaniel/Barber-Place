import { gallery } from "../assets/assets"


const ServicePage = () => {
    return (
        <section className='bg-zinc-800 px-8 md:px-12 py-2'>
            <h1>Our services</h1>
            <p>Customer staisfaction is our priority</p>
            <h1 className="text-amber-500 text-2xl text-center">Our Gallery</h1>
            <p className="text-center text-gray-500 text-sm mb-10">Go through our gallery and choose what style suits you best</p>
            <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center justify-center">
                {
                    gallery.slice(0, 4).map((item, index) => (
                        <div className="flex flex-col justify-center items-start " key={index}>
                                <img src={item.image} alt="image" className="max=w-[360px]" />
                            <div className="text-amber-500 ">
                                <p>Hairstyle: <span className="text-white">{item.type}</span></p>
                                <p>Price: $ <span className="text-white">{item.price}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="flex mx-auto text-white px-8 py-3 bg-amber-700 mt-10">View More</button>
        </section>

    )
}

export default ServicePage
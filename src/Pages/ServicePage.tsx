import { EffectCoverflow, Pagination } from "swiper/modules";
import { gallery } from "../assets/assets";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";


const ServicePage: React.FC = () => {
    return (
        <section className='bg-zinc-800 px-8 md:px-12 py-2'>
            <h1 className="text-white text-2xl text-center my-10">Interested? Come On In!</h1>
            {/* <div className="">
                <form className="flex flex-col items-center justify-center gap-2 text-white text-base">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="w-full block bg-neutral-600 border-none outline-none p-2" />
                    </div>
                    <div className="flex gap-4">
                        <div className="">
                            <label htmlFor="name">Time</label>
                            <input type="time" name="name" className="w-full block bg-neutral-600 border-none outline-none p-2" />
                        </div>
                        <div className="">
                            <label htmlFor="name">Date</label>
                            <input type="date" name="name" className="w-full block bg-neutral-600 border-none outline-none p-2" />
                        </div>
                    </div>
                    <div className="">
                        <label htmlFor="service"></label>
                    </div>
                </form>
            </div> */}
            <h1 className="text-amber-500 text-2xl text-center">Our Gallery</h1>
            <p className="text-center text-gray-500 text-sm mb-10">Go through our gallery and choose what style suits you best</p>
            <Swiper effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="container w-full py-[50px]">
            
                {
                    gallery.map((item, index) => (
                        <SwiperSlide className="bg-center bg-cover w-[300px] h-[300px]" key={index}>
                            <img src={item.image} alt="image" className="block max-w-[360px]" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <button className="flex mx-auto text-white px-8 py-3 bg-amber-700 mt-10">View More</button>
        </section>

    )
}

export default ServicePage
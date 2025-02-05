
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { gallery } from "../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css/bundle";
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

export default () => {
    return (
        <Swiper
            effect={'coverflow'}
            modules={[EffectCoverflow, Pagination, Navigation]}
            grabCursor={true}
            centeredSlides={true}
            spaceBetween={50}
            slidesPerView={2}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            className="w-full py-12">

            {
                gallery.map((item, index) => (
                    <SwiperSlide className="flex items-center justify-center bg-center bg-cover w-[300px] h-[300px]" key={index}>
                        <img src={item.image} alt="image" className="w-auto max-w-full" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}
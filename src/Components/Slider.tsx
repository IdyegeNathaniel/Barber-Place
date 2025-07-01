import Slider from "react-slick";


const ServiceSlide: React.FC<React.PropsWithChildren> = ({ children }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1,
     
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
        ],
      }
  return (
          <Slider {...settings}>

              {children}

          </Slider>
   
  )
}

export default ServiceSlide
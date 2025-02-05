import Slider from "../Components/Slider"



const ServicePage: React.FC = () => {
  return (
    <section className='bg-zinc-800 px-8 md:px-12 py-2'>
     <div className="max-w-md p-8 bg-zinc-900 mx-auto shadow-md rounded-md my-20">
        <h2 className="text-2xl font-bold text-amber-500 mb-6 flex items-center justify-center">✂️ Book Your Appointment</h2>
      <div className=""></div>
      </div>
      <h1 className="text-amber-500 text-2xl md:text-3xl lg:text-4xl text-center">Our Gallery</h1>
      <p className="text-center text-gray-500 text-sm mb-10">Go through our gallery and choose what style suits you best</p>
      <div className="relative mb-20">
        <Slider /> 
      </div>
    </section>

  )
}

export default ServicePage